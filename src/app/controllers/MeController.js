const Course = require('../models/Course');

class MeController {
    storedCourses(req, res, next) {
        Course.find({}).lean()
            .then((courses) => res.render('me/storedcourses', { courses }))
            .catch(next);
    }

    trashCourses(req, res, next) {
        Course.findWithDeleted({deleted:true}).lean()
            .then((courses) => res.render('me/trashcourses', { courses }))
            .catch(next);
    }
}

module.exports = new MeController();
