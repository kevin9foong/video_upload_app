const { Sequelize } = require('sequelize');
const sequelize = require('../database/sequelize');

const Video = sequelize.define('video', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    startDateTime: {
        type: Sequelize.DATE,
        allowNull: false
    },
    location: {
        type: Sequelize.STRING,
        allowNull: true
    },
    destination: {
        type: Sequelize.STRING,
        allowNull: false
    },
    videoSize: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    originalName: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Video;