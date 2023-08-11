# blog-api/server

A RESTful express based web api. I utilized the knowledge of building web apis and securing them using JWT, and configuring CORS to only allow access to api by the client and admin.

# Setup

Make sure you have the following environment variables in your .env file: `SECRET`, `CLIENT_ORIGIN`, `SERVER_ORIGIN`, `MONGODB_URL`, `PORT`. Run the following command to start the server.

```bash
$ node index.js
```

# Libraries

- <a href="https://expressjs.com/">ExpressJS</a>
- <a href="https://express-validator.github.io/">Express Validator</a>
- <a href="https://mongoosejs.com/">mongoose</a>
- <a href="http://www.passportjs.org/">PassportJS</a>
