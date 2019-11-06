import 'dotenv/config';
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import { router } from '../server/routes'


const app = express();
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 2500;

app.use(cors());
//app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,  { useNewUrlParser: true, useCreateIndex: true } 
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB connection looks good to go!')
});

app.use('/', router);


app.listen(port, () => {
    console.log(`Bring your requests on, on port ${port}`);
});

export default app;