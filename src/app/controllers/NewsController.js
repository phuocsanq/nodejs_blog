class NewsController {
    index(req, res) {
        res.render('news');
    }
    show(req, res) {
        res.send('NEWS details');
    }
}

module.exports = new NewsController();
