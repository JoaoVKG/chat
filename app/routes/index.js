module.exports = function (application) {
    application.get('/', function (req, res) {
        console.log(application.app);
        application.app.controllers.index.home(application, req, res);
    });
}