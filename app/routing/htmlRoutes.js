var path = require("path");

module.exports = function(app) {
// if the survey url is used or if the survey link is pressed
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

    app.use(function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/home.html"));
	});
};