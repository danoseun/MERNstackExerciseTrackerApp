import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';


const app = express();
const port = process.env.PORT || 2500;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, ( useNewUrlParser: true, useCreateIndex: true )
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB connection dey work fine fine')
});

app.listen(port, () => {
    console.log(`Bring your requests on, on port ${port}`);
});