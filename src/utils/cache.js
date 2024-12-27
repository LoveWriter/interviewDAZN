const nodeCache = require("node-cache");
const cache = new nodeCache({stdTTL: 100, checkperiod: 120});
module.exports = cache;