const express = require('express') ;
const expressLayouts = require('express-ejs-layouts');
const mongoose = require ('mongoose')

const app = express()

//db config
const db = require('./config/keys').MongoURI

mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('MongoDB Connected..'))
.catch(err => console.log(err))

//ejs
app.use(expressLayouts);
app.set('view engine', 'ejs');

// body Pareser
app.use(express.urlencoded({extended: false}))
//routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));


const PORT = process.env.PORT || 5000 ;

app.listen(PORT, console.log(`Server started on port ${PORT}`));