const express = require('express');
const sequelize = require('./database/sequelize');
const uploadRoutes = require('./routes/uploadRoutes');
const cors = require('cors');

const PORT = 3001;

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.get('/', (_req, res) => {
    res.send('Hello World!')
})

app.use(uploadRoutes);

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Video wizard backend listening at http://localhost:${PORT}`)
    })
}).catch(err => {
    console.log(err);
});