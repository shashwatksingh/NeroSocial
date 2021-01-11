const mongoose =require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        /* Mongoose will throw an error if email is not unique in the databse*/
        type : String,
        required : true,
        unique : true
    },
    password: {
        type : String,
        required : true
    } ,
    name: {
        type : String,
        required : true
    }
},{
   timestamps : true 
    /* When wa the user created and updated */
    //mongoose update these timestamp
});
//telling mongo that this is a model
const User = mongoose.model('User',userSchema);
module.exports = User;