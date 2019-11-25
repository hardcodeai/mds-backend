## Running the project

### Setup .env.development in the project root with the valud for following content

`DB_URL='<your-database-url>'`

`JWT_SECRET='<a random string to be used as JWT secret>'`

### Running the api

`npm start`

### NB:
Please send a request to '/users' path with the body of {"username":'<requisite username>', "password":'<requisite password>'}. This route
has been left unprotected for that reason. I did not find a time to put in a handler Ui for the same.
