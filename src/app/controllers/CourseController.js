class CourseController {
    show(req, res) {
        res.send('COURSES DETAIL' + req.params.slug);
    }
}

module.exports = new CourseController();
