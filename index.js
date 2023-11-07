const app = require('./app');
const dp = require('./config/db');
const UserModel = require('./models/users.model');

const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello App!!!');
})

app.listen(port,() => {
    console.log(`server listening on port: http://localhost:${port}`);
})