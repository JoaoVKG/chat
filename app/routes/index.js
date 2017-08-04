module.exports = function (application) {
    application.get('/', function (req, res) {
        if (application.app) {
            application.app.controllers.index.home(application, req, res);
        } else {
            application.controllers.index.home(application, req, res);
        }

    });
}