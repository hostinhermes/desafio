const app = require('./src/config/custom-express');

// Configura a porta pela variavel de ambiente ou usa a 3000 como padrão
const port = process.env.port || 3000

app.listen(3000, function() {
     console.log('Server initialiazed on port ' + port) 
});