module.exports = function (application) {
    application.get('/', function (req, res) {

        application.controllers.index.home(application, req, res);


    });
}