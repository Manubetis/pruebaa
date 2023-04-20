const { stringify } = require('css');
const {Schema, model} = require('mongoose');

const userSchema =  new Schema({
    nombreApellidos: {
        type: String,
        required: false,
        unique: true
    },
    email: {
        type: String,
        required:true,
        unique:true
    },
    password: {
        type: String,
        required: true
    },
    fechaNacimiento: {
        type: String,
        required:false
    },
    localidad: {
        type: String,
        required:false
    },
    admin: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true
});

module.exports = model ('User', userSchema)
