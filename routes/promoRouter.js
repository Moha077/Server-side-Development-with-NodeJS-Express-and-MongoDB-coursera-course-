const express = require('express');
const bodyParser = require('body-parser');

const  promoRouter  = express.Router();

promoRouter .use(bodyParser.json());

promoRouter .route('/')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next()
    }).get((req,res,next)=>{
         res.end('Wil sen all the PROMOTIONS to you')
    }).post( (req,res,next)=> {
        res.end('Will add the promo :'+ req.body.name + 'with details :' + req.body.description);
    }).put( (req,res,next)=> {
        res.statusCode = 403 ;
        res.end('PUT not supported on  /promotions');
    }).delete( (req,res,next)=> {
        res.end('Delet all the /promotions');
    });
    promoRouter
    .route('/:promoId')
    .all(function (req, res, next) {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        next()
    })

    .get(function (req, res, next) {
        res.end('We will send details of the promo: ' + req.params.dishId + ' to you!')
    })

    .put(function (req, res, next) {
        res.write('Updating the promo: ' + req.params.dishId + '\n');
        res.end('Will update the promo: ' + req.body.name +
            ' with details: ' + req.body.description)
    })

    .delete(function (req, res, next) {
        res.end('Farewell promo: ' + req.params.dishId)
    });
    
    module.exports=promoRouter;