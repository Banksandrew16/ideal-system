const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/api')

const app = express();
const PORT = process.env.Port || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRoutes);

mongoose.connect(process.env.MONGODB_URI || ', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.set('debug', true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
