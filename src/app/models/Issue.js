var mongoose = require('mongoose');
// var mongoosePaginate = require('mongoose-paginate');

var schema = mongoose.Schema({
    title: { 
        type: String, 
        required: true
    }, 
    description: {
        required: true,
        type: String
    }, 
    userReporter: {
        required: true,
        type: String        
    },
    userAssign: {
        required: false,
        type: String        
    },
    status: {
        required: true,
        type: String        
    },
    createDate: {
        required: false,
        type: Date        
    },
    updateDate: {
        required: false,
        type: Date        
    }

});



module.exports = mongoose.model('Issue', schema);