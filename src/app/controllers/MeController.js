const Course = require('../models/Course');

class MeController {
    storedcourses(req, res, next) {
        Course.find({})
            .lean()
            .then((courses) => res.render('me/storedCourses', { courses }))
            .catch(next);
    }
}

module.exports = new MeController();
