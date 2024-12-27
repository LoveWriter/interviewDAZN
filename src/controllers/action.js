const dbapi = require("../docdb/dbapi")
const cache = require("../utils/cache");

const getMoviesList = async (req, res) => {
    try {
        const mvData = await dbapi.getMoviesList(); // Fetch all movies

        if (!mvData || mvData.length === 0) {
            return res.status(400).json({message: "No movie found"});
        }

        if (cache.get("movies")) {
            cache.del("movies");
            cache.set("movies", mvData, 60);
        } else {
            cache.set("movies", mvData, 60);
        }
        res.status(200).json(mvData);
    } catch (error) {
        if (error) {
            console.log(error);
            res.status(500).json({message: error.message});
        }
    }
};

const getMovieByQuery = async (req, res) => {
    try {
        const mvData = await dbapi.getMovieByQuery(req.query.q);
        if (mvData.length === 0) {
            return res.status(400).json({message: "No movie found"});
        }
        if (cache.get("movies")) {
            cache.del("movies");
            cache.set("movies", mvData, 60);
        } else {
            cache.set("movies", mvData, 60);
        }
        res.status(200).json(mvData);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const createMovie = async (req, res) => {
    try {
        const data = req.body;
        const movie = await dbapi.createMovie(data);
        res.status(201).json(movie);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const updateMovie = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const movie = await dbapi.updateMovie(id, data);
        res.status(200).json(movie);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const deleteMovie = async (req, res) => {
    try {
        const id = req.params.id;
        await dbapi.deleteMovie(id);
        res.status(200).json({message: "Movie deleted successfully"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    getMoviesList,
    getMovieByQuery,
    createMovie,
    updateMovie,
    deleteMovie
};

