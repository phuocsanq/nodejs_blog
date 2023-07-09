const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// https://www.npmjs.com/package/mongoose-slug-updater
const slug = require('mongoose-slug-updater');
mongoose.plugin(slug);

const Course = new Schema(
    {
        name: { type: String, require: true },
        description: { type: String },
        image: { type: String },
        videoId: { type: String, require: true },
        slug: {
            type: String,
            slug: 'name',
            unique: true,
            slugOn: { updateOne: true },
        },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Course', Course);
