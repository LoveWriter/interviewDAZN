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

# Sample Responses
[
    {
        "_id": "676d9107a20ac98c59b4d4e7",
        "id": "472785f2",
        "title": "Pushpa3",
        "rating": 8,
        "streaminglink": "https://dazn.com",
        "createdAt": "2024-12-26T17:23:19.991Z",
        "updatedAt": "2024-12-26T17:32:03.654Z",
        "__v": 0,
        "genre": "action"
    },
    {
        "_id": "676d975f7c631f922f2bf49f",
        "id": "367da3c2",
        "title": "salaar",
        "rating": 8,
        "genre": "action",
        "streaminglink": "https://dazn.com",
        "createdAt": "2024-12-26T17:50:23.091Z",
        "updatedAt": "2024-12-26T17:50:23.091Z",
        "__v": 0
    },
    {
        "_id": "676d97727c631f922f2bf4a1",
        "id": "2a532bc5",
        "title": "premalu 2",
        "rating": 8,
        "genre": "romance",
        "streaminglink": "https://dazn.com",
        "createdAt": "2024-12-26T17:50:42.152Z",
        "updatedAt": "2024-12-26T17:54:41.687Z",
        "__v": 0
    },
    {
        "_id": "676e406dfdf8b1eb4b8366e0",
        "id": "0145969c",
        "title": "dead pool",
        "rating": 8,
        "genre": "sci-fi",
        "streamingLink": "https://dazn.com",
        "createdAt": "2024-12-27T05:51:41.681Z",
        "updatedAt": "2024-12-27T06:07:01.407Z",
        "__v": 0
    }
]

Implemented middlewares using Joi 
Implemented rate-limiting
Implemented Node-cache for caching

Did not add test - cases If time will do 


For rate-limit only 3 request allowed and after 5mins it will be renewed
