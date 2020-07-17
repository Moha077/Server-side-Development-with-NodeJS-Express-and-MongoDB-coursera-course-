const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
require('mongoose-currency').loadType(mongoose);

const Currency = mongoose.Types.Currency;


const commentSchema = new Schema({

    rating : {
        type: Number,
        required:true,
        min:1,
        max:5
    },
    comment : {

        type:String,
        required: true
    },
    author: {
        type:String,
        required:true
    },
    
},
{timestamps:true});

const dishSchema = new Schema({

    name : {
        type:String,
        required:true,
        unique: true 
    },
    description :{
        type:String ,
        required:true,
    },
    images: {

        type:String,
        required:true
    },
    category: {

        type:String,
        default:''
    },
    label: {

        type:String,
        required:true
    },
    price: {

        type:Currency,
        required:true,
        min:0
    },
    featured: {

        type:Boolean,
default:false    },
    comments: [commentSchema]
     
},
{timestamps:true}

);


var Dishes =mongoose.model('Dish',dishSchema);
module.exports= Dishes;