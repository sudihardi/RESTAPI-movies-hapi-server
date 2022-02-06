# RESTAPI-movies-hapi-server
## How to run the project
You need to install required dependencies (libraries) by typing in the terminal
```bash
npm install
```
Then you can run this project by:
- Using nodemon
  ```bash
  npm run dev
  ```
----------

## Enviroment Variables (dotenv)
This project uses environment variables likes :
```bash
MYSQL_PASSWORD=""
MYSQL_HOST=""
MYSQL_DATABASE=""
MYSQL_USER=""
PORT=""
```

## Example testing API on Postman
- Get all movies ( Method: GET )
```bash
  localhost:3000/api/movies
  ```

- Get movies by tittle ( Method: GET)
input any words containing movie tittle in params
example movie tittle: Money Heist 
```bash
  localhost:3000/api/movies/Money
  or
  localhost:3000/api/movies/Mon
  or
  localhost:3000/api/movies/Mone
  or
  localhost:3000/api/movies/Heist
  ```

- Create new movie ( Method: POST)
```bash
  localhost:3000/api/movies

  json body:

  {
    "tittle": "Money Heist", 
    "trailer": "https://www.imdb.com/video/vi2646786841?playlistId=tt6468322&ref_=tt_ov_vi", 
    "synopsis": "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.", 
    "realease_date": "2017-05-02", 
    "director": "Alex Pina", 
    "featured_song": "Bella Ciao",
    "budget": "$40 million"
}
  ```

  - Update a movie by id (Method: POST)
  ```bash
  localhost:3000/api/movies/{put uuid movie here}

  json body:

  {
    "tittle": "Money Heist", 
    "trailer": "https://www.imdb.com/video/vi2646786841?playlistId=tt6468322&ref_=tt_ov_vi", 
    "synopsis": "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.", 
    "realease_date": "2017-05-02", 
    "director": "Alex Pina", 
    "featured_song": "Bella Ciao",
    "budget": "$40 million"
}
  ```

- Delete a movie (Method: DELETE)
```bash
  localhost:3000/api/movies/{put uuid movie here}
  ```

  ----------