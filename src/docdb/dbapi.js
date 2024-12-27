const mongoose = require("mongoose");
const crypto = require("crypto");

const movieSchema = new mongoose.Schema(
    {
        "id": {
            type: String,
            required: true,
            minlength: 8,
            maxlength: 8,
        },
        "title": {
            type: String,
            required: true
        },
        "rating": {
            type: Number,
            min: 0,
            max: 10,
            required: true
        },
        "genre": {
            type: String,
            required: true
        },
        "streamingLink": {
            type: String,
            required: true,
            validator: function (v) {
                return v.startsWith("http://") || v.startsWith("https://");
            }
        }
    },
    {
        collection: "movies",
        timestamps: true
    });

const movieModel = mongoose.model("Movie", movieSchema);


function getMoviesList() {
    return movieModel.find();
}

function getMovieByQuery(query) { // queires the movie by title or genre
    return movieModel.find(
        {
            $or: [
                {title: query},
                {genre: query}
            ]
        })
}

function createMovie(data) {
    data.id = crypto.randomBytes(4).toString("hex");
    return movieModel.create(data);
}

function updateMovie(id, data) {
    return movieModel.findOneAndUpdate(
        {
            id
        },
        {
            $set: data
        },
        {
            new: true
        }
    )
}

function deleteMovie(id) {
    return movieModel.deleteOne({id}); // we can do a soft delete by toggling a flag status true or false
}

module.exports = {
    getMoviesList,
    getMovieByQuery,
    createMovie,
    updateMovie,
    deleteMovie
};