const app = require('./config/server');

const server = app.listen(80, function() {
    console.log("Servidor está online");
})

const io = require('socket.io').listen(server);

app.set('io', io);

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
            {apelido: data.apelido, mensagem: data.mensagem }
        );

        socket.broadcast.emit('msgParaCliente',
            {apelido: data.apelido, mensagem: data.mensagem }
        );


    })
});