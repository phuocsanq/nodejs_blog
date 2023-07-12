const Course = require('../models/Course');

class MeController {

    storedCourses(req, res, next) {
        Promise.all([Course.find({}).lean(), Course.countDocumentsWithDeleted({deleted:true})])
            .then(([courses, deletedCount]) => res.render('me/storedcourses', {courses, deletedCount}))
            .catch(next)
    }

    // storedCourses(req, res, next) {
    //     Course.find({}).lean()
    //         .then((courses) => res.render('me/storedcourses', { courses }))
    //         .catch(next);
    // }

    // countCourseDeleted(req, res, next) {
    //     Course.countDocumentsDeleted()
    //         .then((countDelete) => res.render('me/storedcourses', { countDelete }))
    //         .catch(next)
    // }

    trashCourses(req, res, next) {
        Course.findWithDeleted({deleted:true}).lean()
            .then((courses) => res.render('me/trashcourses', { courses }))
            .catch(next);
    }
}

module.exports = new MeController();
