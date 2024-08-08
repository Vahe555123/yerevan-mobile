const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const postSchema = new Schema({
    name: {
        type: String,
        require: true,
        trim: true,
    },
    lastName: {
        type: String,
        require: true,
        trim: true,
    },

    email: {
        type: String,
        require: true,
        trim: true,
    },
    password: {
        type: String,
        require: true,
        trim: true,
    },
    confirmed: {
        type: Boolean,
        default: false
    },
    basket: {
        type: Array
    },
    wishList: {
        type: Array
    },
    resetPasswordToken: {
        type:String
    },
    resetPasswordExpires: {
        type: Date
    }
})
const modelPhones = new Schema({

    name: {
        type: String,
        require: true,
        trim: true,
    },
    price: {
        type: Number,
        require: true,
        trim: true,
    },
    ram: {
        type: Number,
        require: true,
        trim: true,
    },
    card: {
        type: Number,
        trim: true,
    },
    cash: {
        type: Number,
        trim: true,
    },
    month12: {
        type: Number,
        trim: true,
    },
    month24: {
        type: Number,
        trim: true,
    },
    month36: {
        type: Number,
        trim: true,
    },

    memory: {
        type: Number,
        require: true,
        trim: true,
    },
    color: {
        type: String,
        require: true,
        trim: true,
    },
    img: {
        type: String,
        trim: true,
    },
    type: {
        type: String,
        trim: true,
    },
    model: {
        type: String,
        trim: true,
    },
    likes: {
        type: Array
    },
    screenSize:{
        type: Number,
        trim:true,
    },
    sku:{
        type: Number,
        trim:true,
    },
    battery:{
        type: Number,
        trim:true,
    },
    year:{
        type: Number,
        trim:true,
    },
    cpu:{
        type: String,
        trim:true,
    },
    brand:{
        type: String,
        trim:true,
    },
    chipset:{
        type:String,
        trim:true,
    }
    
})
const adminModel = new Schema({
    name: {
        type: String,
        require: true,
        trim: true,
    },
    password: {
        type: String,
        require: true,
        trim: true,
    },
})

const Post = mongoose.model('quest', postSchema);
const PhoneModel = mongoose.model('phones', modelPhones);
const AdminModel = mongoose.model('admin',adminModel);
module.exports.Post = Post;
module.exports.PhoneModel = PhoneModel;
module.exports.AdminModel = AdminModel;

