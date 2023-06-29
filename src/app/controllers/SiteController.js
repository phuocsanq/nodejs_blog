const Course = require('../models/Course');

class SiteController {
    async home(req, res) {
        try {
            const data = await Course.find({});
            res.json(data);
        } catch (error) {
            res.status(400).json({ error: err });
        }
    }
    //res.render('home');
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
