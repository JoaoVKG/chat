module.exports = function (application) {
    application.get('/', function (req, res) {
        console.log(application);
        application.controllers.index.home(application, req, res);
    });
}