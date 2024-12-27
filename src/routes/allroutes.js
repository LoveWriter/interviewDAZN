const {validateBody, validateQuery, validateParams, validateSigner} = require("../middlewares/schemaValidator");
const isAuthorised = require("../middlewares/auth");
const {createMovie, updateMovie, getMoviesList, getMovieByQuery} = require("../controllers/action");

const router = require("express").Router();

router.get("/search", validateQuery, getMovieByQuery);
router.get("/movies", getMoviesList);
router.post("/movies", validateSigner, isAuthorised, validateBody, createMovie);
router.put("/movies/:id", validateSigner, isAuthorised, validateBody, validateParams, updateMovie);
router.delete("/movies/:id", validateSigner, isAuthorised, validateBody, validateParams, updateMovie);

module.exports = router;