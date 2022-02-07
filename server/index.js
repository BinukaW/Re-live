import express from 'express';
import apolloServer from 'apollo-server-express';
import path from 'path';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'

const PORT = process.env.PORT || 3001;
const app = express();

app.use('/posts', postRoutes)

app.use(express.json({ limit: '30mb', extended: false}));
app.use(express.urlencoded({ limit: '30mb', extended: false}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://Atlas:Atlas1@cluster0.w0x53.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(CONNECTION_URL).then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))).catch((error) => console.log(error.message));


