const express = require('express');
const cors = require('cors');
const app = express();
const productRouter = require('./routes/products');
const session = require('express-session');
const {keycloak,memoryStore} = require('./keyclockConfig');

app.use(express.json());
app.use(cors());



// // Configure session
app.use(
    session({
        secret: 'mySecret',
        resave: false,
        saveUninitialized: true,
        store: memoryStore,
    })
);


app.use( keycloak.middleware() );




app.use('/api/products', productRouter);


app.get('/public',(req, res) => {
    res.send( {'date': new Date() } )
});



app.listen(8000,()=>console.log("http://localhost:8000"))
