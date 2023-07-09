const Course = require('../models/Course');

class CourseController {
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug }).lean()
            .then((course) => {
                res.render('courses/show', { course });
            })
            .catch(next);
    }

    create(req, res) {
        res.render('courses/create');
    }

    store(req, res, next) {
        // res.json(req.body)
        var formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        course.save()
            .then(() => res.redirect('/'))
            .catch(next);
    }

    edit(req, res, next) {
        Course.findById(req.params.id).lean()
            .then((course) => res.render('courses/edit', { course }))
            .catch(next);
        // res.render('courses/edit')
    }

    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }
    delete(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)

    }
}

module.exports = new CourseController();
