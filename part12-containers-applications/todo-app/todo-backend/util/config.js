// import * as dotenv from 'dot-env';
// dotenv.config();

const MONGO_URL = process.env.MONGO_URL || undefined
const REDIS_URL = process.env.REDIS_URL || undefined

module.exports = {
  MONGO_URL: MONGO_URL, //"mongodb://the_username:the_password@localhost:3456/the_database" //MONGO_URL, //'mongodb://the_username:the_password@localhost:3456/the_database',
  // REDIS_URL: '//localhost:6378'
}


// MONGO_URL=mongodb://the_username:the_password@localhost:3456/the_database?connectTimeoutMS=300000 npm run dev

// MONGO_URL=mongodb://127.0.0.1:3456/the_database PASSWORD=example USERNAME=root node ./bin/www
