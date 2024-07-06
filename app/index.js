const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const router = require('./routers');
const {MORGAN_FORMAT} = require('../config/application');
const app = express();

app.use(morgan(MORGAN_FORMAT));
app.use(cors());
app.use(express.json());

// const db = require('./models/index')

// async function testDb() {
//     try {
//         await db.sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//       } catch (error) {
//         console.error('Unable to connect to the database:', error);
//       }    
// }
// testDb()
module.exports = router.apply(app);
module.exports = app;