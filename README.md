# interviewDAZN
DAZN streaming platform
Aftwr Git clone Please do below steps and need to send ?signer=admin so that admin permission can be avail
# npm install
# npm start


# Post create movie URL

    * http://localhost:3000/api/vi/movielobby/movies?signer=admin
    *   {
    "title": "dead pool",
    "rating":8,
    "genre":"sci-fi",
    "streamingLink":"https://dazn.com"
    }

# Put update movie URL
    * http://localhost:3000/api/vi/movielobby/movies/0145969c?signer=admin

# Get all movies
    * http://localhost:3000/api/vi/movielobby/movies

# Get movies by query string
    http://localhost:3000/api/vi/movielobby/search?q=action

# Delete movie by id
    * http://localhost:3000/api/vi/movielobby/movies/0145969c?signer=admin



Implemented middlewares using Joi 
Implemented rate-limiting
Implemented Node-cache for caching

Did not add test - cases If time will do 


For rate-limit only 3 request allowed and after 5mins it will be renewed