const get404 = (req, res, next) => {
    res.render('404', { pageTitle: 'Page Not Found', path: '' });
};

exports.get404 = get404;