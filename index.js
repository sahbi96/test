import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();


app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}))
app.use(cors());

app.use('/posts',postRoutes)

const CONNECTION_URL = 'mongodb+srv://sahbi96:mongo123@mycluster.i4cw2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5500
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=> app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`)))
.catch((err)=> console.log('Failed to connect to mongodb',err) )

mongoose.set('useFindAndModify',false);





