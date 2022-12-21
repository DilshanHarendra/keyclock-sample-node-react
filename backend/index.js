const express = require('express');
const cors = require('cors');
const app = express();
const productRouter = require('./routes/products');
const jwt = require('jsonwebtoken')

app.use(express.json());
app.use(cors());


app.use('/api/products', productRouter);

const authMiddleware = (req,res,next) =>{
    const authorization = req.headers.authorization
    if (authorization){
        const token = authorization.split(" ")[1]||''
        if (token){
            try {
                jwt.verify(token,'admin',{ algorithms: 'RS256'})
            }catch (e) {
                res.status(401).send({message:e})
            }

        }else{
            res.status(401).send({message:'no token'})
        }
    }else {
        res.status(401).send({message:'no token'})
    }
    res.send()
}

app.get('/public',authMiddleware,(req, res) => {
    res.send( {'date': new Date() } )
});



app.listen(8000,()=>console.log("http://localhost:8000"))
