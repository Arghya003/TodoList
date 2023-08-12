const mongoose = require('mongoose');

const TodoSchema= mongoose.Schema(
    {
        text:{
            type:String,
            required: true,
        },
        completed:{
            type:Boolean,
            required: true,
        }
    },
    {timestamps:true}
)

module.exports=mongoose.model('todos',TodoSchema)