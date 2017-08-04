module.exports = function (application) {
    application.post('/chat', function (req, res) {
        if (application.app) {
            application.app.controllers.chat.iniciaChat(application, req, res);
        } else {
            application.controllers.chat.iniciaChat(application, req, res);
        }
       
    });

    application.get('/chat', function (req, res) {
        if (application.app) {
            application.app.controllers.chat.iniciaChat(application, req, res);
        } else {
            application.controllers.chat.iniciaChat(application, req, res);
        }

    });

}