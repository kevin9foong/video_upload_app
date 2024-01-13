import { Sequelize, Optional, DataTypes, ModelDefined } from "sequelize";
import sequelize_db from "../database/sequelize";


export interface VideoAttributes {
    title: string;
    startDateTime: Date;
    location?: string;
    destination: string;
    videoSize: number;
    originalName: string;
}

export type VideoCreationAttributes = Optional<VideoAttributes, "location">;

const Video: ModelDefined<VideoAttributes, VideoCreationAttributes>  = sequelize_db.define('video', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    startDateTime: {
        type: DataTypes.DATE,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: true
    },
    destination: {
        type: DataTypes.STRING,
        allowNull: false
    },
    videoSize: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    originalName: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Video;