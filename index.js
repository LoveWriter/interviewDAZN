const express = require('express');
const pino = require('pino-http')();
const dotenv = require('dotenv');
const rateLimit = require('express-rate-limit');
const allroutes = require('./src/routes/allroutes');
const db = require('./src/docdb/db');

const limiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    limit: 3, // Limit each IP to 3 requests per `window` (here, per 10 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

const app = express();

app.use(limiter);
app.use(pino);
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

dotenv.config();

db.connectDB().then(() => {
    console.log('Connected to database');
    app.use('/api/vi/movielobby/', allroutes);
}).catch((err) => {
    console.log(err);
    db.closeDB();
})/* .finally(() => {
    console.log('Database connection closed');
    db.closeDB();
}); */

/* eslint-disable no-undef */
app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});
/* eslint-enable no-undef */
