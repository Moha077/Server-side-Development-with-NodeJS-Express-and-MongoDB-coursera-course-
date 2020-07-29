var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./models/user');
//LASTe ADDEd
var JwtStrategy=require('passport-jwt').Strategy;
var ExtractJwt =require('passport-jwt').ExtractJwt;
var jwt =require('jsonwebtoken');
var config=require('./config');

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

exports.getToken =function(user){
    return jwt.sign(user ,config.secretKey , 
        {expiresIn:3600});
}