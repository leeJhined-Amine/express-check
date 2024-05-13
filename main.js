//Server setup
const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use('/public', express.static('public'))

//calling routes
const homeRoutes = require('./routes/homeRoutes');
const contactRoutes = require('./routes/contactRoutes');
const servicesRoutes = require('./routes/servicesRoutes')

//using routes
app.use(homeRoutes);
app.use(contactRoutes);
app.use(servicesRoutes);


//server launching
app.listen(3000, ()=> {console.log("listening at http://localhost:3000")})