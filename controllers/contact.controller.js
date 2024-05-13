exports.getInfo = (req, res) => {
    const email = req.body.email;
    const name = req.body.name;
    console.log(`${email}\n${name}`)
}

exports.showInfo = (req, res) => {
    res.render('contact');
}