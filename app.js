var app = require('./config/server');

const server = app.listen(process.env.PORT, function() {
    console.log("Servidor está online na porta " + process.env.PORT);
})

const io = require('socket.io').listen(server);

app.set('io', io);

// app.get('/', function (req, res) {
//         //console.log(application);
//         app.app.controllers.index.home(app, req, res);
//     });

io.on('connection', function(socket) {
    console.log('Usuário conectou');
    var apelidoGlobal = '';
    socket.on('apelido', function(data) {
        apelidoGlobal = data.apelido;
    })
    
    socket.on('disconnect', function(data) {
        console.log('Usuário desconectou');
        socket.broadcast.emit('msgParaCliente',
            {apelido: apelidoGlobal, mensagem: 'saiu do chat!' }
        );
    })

    socket.on('msgParaServidor', function(data) {
        socket.emit('msgParaCliente',
            {apelido: data.apelido, mensagem: data.mensagem}
        );

        socket.broadcast.emit('msgParaCliente',
            {apelido: data.apelido, mensagem: data.mensagem}
        );

        if(parseInt(data.apelido_atualizado_nos_clientes) == 0 ) {
            socket.emit('participantesParaCliente',
                {apelido: data.apelido}
            );

            socket.broadcast.emit('participantesParaCliente',
                {apelido: data.apelido}
            );
        }


    })
});