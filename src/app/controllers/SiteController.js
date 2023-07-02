const Course = require('../models/Course');

class SiteController {
    // async home(req, res) {
    //     try {
    //         const data = await Course.find({});
    //         res.json(data);
    //     } catch (error) {
    //         res.status(400).json({ error: err });
    //     }
    // }
    home(req, res, next) {
        Course.find({}).lean()                     //.lean()   (thì khỏi cần convert qua object bình thường)
            .then(courses => {
                // courses = courses.map(course => course.toObject())          // course là object constructor của mongoose -> object bình thường
                res.render('home', {courses})
            })
            .catch(next)
    }

    //res.render('home');
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
