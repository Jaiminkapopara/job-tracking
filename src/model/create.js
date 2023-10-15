const { mongoose, models, model } = require("mongoose");

const CreateSchema = new mongoose.Schema({
    creator: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    company: {
        type: String,
        require: true
    },
    packages: {
        type: String,
        require: true
    },
    duration: {
        type: Number,
        require: true
    },
    location: {
        type: String,
        require: true
    },
    km: {
        type: Number,
        require: true
    },
    by: {
        type: String,
        require: true
    },
    date: {
        type: String,
    },
    bond: {
        type: Boolean,
        require: true
    },
    interview: {
        type: Boolean,
        require: true
    },
    rejected: {
        type: Boolean,
        require: true
    }
})

const Create = models.Create || model('Create', CreateSchema)

export default Create