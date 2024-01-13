import { Request, Response } from 'express';
import sequelize from './database/sequelize';

const express = require('express');
const uploadRoutes = require('./routes/uploadRoutes');
const cors = require('cors');

const PORT = 3001;

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.get('/', (_req: Request, res: Response) => {
    res.send('Hello World!')
})

app.use(uploadRoutes);

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Video wizard backend listening at http://localhost:${PORT}`)
    })
}).catch((err: any) => {
    console.log(err);
});