const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('./models/userschema');
const Login = require('./models/login');
const bcrypt = require('bcrypt');
const placetender = require('./models/tender');
const multer = require('multer');
const path = require('path');
const fs = require('fs').promises;
const uuid = require('uuid');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const {requireauth} = require('./middleware/auth');

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

mongoose.connect('mongodb+srv://9hacks:nkpacmfb8m@cluster0.tasptqf.mongodb.net/')
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB', error);
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, 'uploads/') // Folder where uploaded files will be stored
  },
  filename: function (req, file, cb) {
      cb(null, file.originalname)
  }
});
const upload = multer({ storage: storage });
const maxAge = 3 * 24 * 60 * 60;

const createtoken = (email) => {
  return jwt.sign({ email }, 'aliysdflua5aklsuygdc18525asy325j45', { expiresIn: maxAge });
}


app.post('/user', async (req, res) => {
    const lastDoc = await User.findOne({}, {}, { sort: { '_id': -1 } });
    let nextId = 1;
    if (lastDoc) {
      nextId = lastDoc._id + 1;
    }
    console.log(nextId);
    const userData = req.body;
    const user = new User(userData);
    user._id = nextId;
    user.save()
      .then(() => {
        const token = createtoken(user.email);
        res.json({ message: 'User data saved successfully', jwt: token, maxAge: maxAge});
      })
      .catch((error) => {
        console.error('Error saving user data:', error);
        res.status(500).json({ error: 'Error saving user data' });
      });
});

app.post('/login', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log(password);
    try {
        const email = req.body.email;
        const password = req.body.password;
        console.log(User);
        const usermail = await User.findOne({ email: email });
        if (password == usermail.password) {
          console.log('User logged in successfully');
          const token = createtoken(usermail.email);
          console.log(usermail.name)
          res.status(200).json({ message: 'User logged in successfully', jwt: token, maxAge: maxAge});
        }else{
            res.status(400).send("invalid password");
        }
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(400).send("invalid email");
    }
  });

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.post('/placetender',requireauth, upload.array('files'), async (req, res) => {
  try {
    const { title, description, startdate, starttime, enddate, endtime, tender_id } = req.body;
    const email = req.email;
    const files = req.files.map(file => file.path);

    const newPlaceTender = new placetender({
      title,
      description,
      files,
      email,
      startdate,
      starttime,
      enddate,
      endtime,
      tender_id
    });
    await newPlaceTender.save();
    
    console.log('Data saved successfully');
    res.status(200)
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving data');
  }
});


app.get('/mytenders', requireauth, async (req, res) => {
  const email = req.email;
  try {
      const user = await User.findOne({
          email
      });
      const tenders = await placetender.find({
          email
      });
      res.json(tenders);
  } catch (error) {
      console.error('Error fetching tenders:', error);
      res.status(500).json({ error: 'Error fetching tenders' });
  }
}
);

  app.use(express.static('uploads'));

  app.get('/alltenders', requireauth, async (req, res) => {
    try {
      console.log(req.email);
      const tenders = await placetender.find();
      res.json(tenders);
    } catch (error) {
      console.error('Error fetching tenders:', error);
      res.status(500).json({ error: 'Error fetching tenders' });
    }
  });


app.get('/bidid', async (req, res) => {
  const email = req.query.mail;
  const data = await User.findOne({email});
  console.log(data._id);
  return res.json(data._id);
});

app.post('/success', async (req, res) => {
    const { email, tender_id } = req.body;
    try{
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'User not found.' });
      }
      user.biddedtenders.push(tender_id);
      await user.save();
      return res.status(200).json({ message: 'Tender ID added successfully.' });
    }catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ message: 'Internal server error.' });
    }
});

app.get('/tender/:tender_id', async (req, res) => {
  const tender_id = req.params.tender_id;
  try {
      const tender = await placetender.findOne({
          tender_id
      });
      res.json(tender);
  } catch (error) {
      console.error('Error fetching tender:', error);
      res.status(500).json({ error: 'Error fetching tender' });
  }
});

app.get('/mybids', async (req, res) => {
  const email = req.query.email;
  try {
    const user = await User.findOne({ email });    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const tenderIds = user.biddedtenders;
    console.log(tenderIds);
    const tenders = await placetender.find({ tender_id: { $in: tenderIds } });
    res.status(200).json(tenders);
  } catch (error) {
    console.error('Error fetching tenders:', error);
    res.status(500).json({ error: 'Error fetching tenders' });
  }
});

app.post('/savedkey', async (req, res) => {
  const { tenderId, bid_id } = req.body;
  try {
    const tender = await placetender.findOne({ tender_id: tenderId });
    if (!tender) {
      return res.status(404).json({ message: 'Tender not found.' });
    }
    tender.dkeys.push(bid_id);
    await tender.save();
    return res.status(200).json({ message: 'Bid ID added successfully.' });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
}
);