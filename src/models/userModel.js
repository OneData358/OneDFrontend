import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    userName : {
        type : String,
        required : false,
    },
    email :{
        type : String,
        required : true,
        unique : true,
    },
    password :{
        type : String,
        required : true,
    },
    isEmailVerified :{
        type : Boolean,
        default : false,
    },
    isAdmin:{
        type : Boolean,
        default : false,
    },
    
},{
    timestamps :true,
});
const model = mongoose.models.users || mongoose.model("users", userSchema);

export default model;