//env Credentials
require('dotenv').config();
//Express Imported
const express = require('express');
const app = express();
//Path import
const path = require('path');
//URL Encoder
const { urlencoded } = require('express');
app.use(express.urlencoded({ extended: false }));
const PORT = 3000;
//Path directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
//Database files
const User = require('./database/usermodel');
const allUsers = require('./tempFiles/allUsers');
const connectDB = require('./database/mongo');
//JWT
const jwt = require('jsonwebtoken');
//Cookie parser
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(express.json());
connectDB();

//Register all users to database
app.post('/registerAllUserToDB', (req, res) => {
  User.insertMany(allUsers)
    .then((users) => {
      res.status(200).json({
        success: 'true',
        users,
      });
    })
    .catch((err) => {
      console.log(err.message);
      res.json({
        message: 'failed',
      });
    });
});

//Delete All Users From Data
app.delete('/deleteAllUsersFromDB', async (req, res) => {
  try {
    await User.collection.drop();
    res.status(200).json({
      success: 'true',
    });
  } catch (err) {
    console.log('ERROR WHILE DELETION...');
    console.log(err.message);
    res.status(400).json({
      message: 'failed',
    });
  }
});

//Restart the Data
app.put('/RestartDB', async (req, res) => {
  try {
    const users = await User.find({});
    users.forEach(async (user) => {
      await User.findByIdAndUpdate(user._id, { loginCount: 0, token: null });
    });
    res.status(200).json({
      success: 'true',
      message: 'Database Restart Successfully',
    });
  } catch (err) {
    console.log('Error Occured While Restarting Database');
    console.log(err);

    res.status(400).json({
      success: 'false',
      message: err.message,
    });
  }
});

//Authenticate the user
app.post('/yrtbsdf6529m7hneodrishti', async (req, res, next) => {
  const { teamName, teamId } = req.body; //teamName and teamID comes from index.js
  console.log(req.body);
  const myuser = await User.findOne({ teamId }); //Find the user in database

  //If the id is not found in database
  if (!myuser) {
    return res.status(401).json({
      success: false,
      message: 'TeamId does not Exists !!!',
    });
  }

  //If id is found in database
  if (teamId === 'NEODRISHTI' || myuser.loginCount === 0) {
    const token = await jwt.sign(
      { teamName, teamId },
      process.env.GOT_SECRET_KEY,
      {
        expiresIn: '48h',
      }
    );

    //Save loginCount and token in database
    myuser.loginCount = 1;
    myuser.token = token;
    await myuser.save();

    //Set first cookie
    res.cookie('permission', 'aqwertyumn', {
      httpOnly: false,
      expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
    });
    //SEnd status 200 and the newly constructed cookie with it
    res
      .status(200)
      .cookie('iamgotkeyforojass', token, {
        httpOnly: false,
        expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      })
      .json({
        success: true,
      });
  } else {
    const cookieToken = req.cookies.iamgotkeyforojass; //Value of cookie from the browser
    //Mathch the cookieToken with the database token
    if (cookieToken === myuser.token) {
      res.status(200).json({
        success: true,
      });
    } else {
      res.status(403).json({
        success: false,
        message: 'User is already loggedIn in other device.',
      });
    }
  }
});

//render the first page
app.get('/ufhsnvrjroneodrishti', (req, res) => {
  const pageNo = req.cookies.permission;

  if (pageNo[0] >= 'a') res.render('firstPage');
});

//final page
app.get('/ufhsdhbfdhshnneodrishti', async (req, res) => {
  const token = req.cookies.iamgotkeyforojass;
  const user = await jwt.verify(token, process.env.GOT_SECRET_KEY);
  const { teamId } = user;

  const pageNo = req.cookies.permission;

  if (pageNo[0] === 'e') res.render('finalPage', { teamId });
});
//Second Page render
app.get('/uhhdfnskhdneodrishti', (req, res) => {
  const pageNo = req.cookies.permission;

  if (pageNo[0] >= 'b') res.render('secondPage');
});

//Third Page
app.get('/ufdxuth897neodrishti', (req, res) => {
  const pageNo = req.cookies.permission;

  if (pageNo[0] >= 'c') res.render('birdPage');
});

//forth Page
app.get('/unfhshdhbmsneodrishti', async (req, res) => {
  const pageNo = req.cookies.permission;

  if (pageNo[0] >= 'd') res.render('forthPage');
});

//Clear cookie from browser
app.get('/clearCookies', async (req, res) => {
  res
    .status(200)
    .cookie('iamgotkeyforojass', undefined, {
      expires: new Date(Date.now()),
      httpOnly: true,
    })
    .json({
      success: true,
      message: 'cookie cleared',
    });
});

//DevTeam page
app.get('/devteam', async (req, res) => {
  res.render('dev-team.ejs');
});
app.get('/back-btn', (req, res) => {
  const pageNo = req.cookies.permission;

  if (pageNo == null) res.render('index.ejs');
  else if (pageNo[0] === 'e') res.render('finalPage');
});

//Home Page
app.get('/', (req, res) => {
  res.render('index.ejs');
});

//Back from Developer page

//Server Listening
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
