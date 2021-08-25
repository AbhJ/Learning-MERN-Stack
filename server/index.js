/**
 * @class       : index
 * @author      : abj (abj@abj)
 * @created     : Tuesday Aug 24, 2021 18:05:07 IST
 * @description : index
 */

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express();

//EVERY ROUTE INSIDE postRoutes IS REACHED BY /posts
app.use('/posts', postRoutes);
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = "mongodb+srv://champman:f71BRbsJPb18vGno@cluster0.cah4a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

//HEROKU POPULATES THE ENVIRONMENT VARIABLE
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => app.listen(PORT, () => console.log('Server is now running on ' + PORT))).catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
