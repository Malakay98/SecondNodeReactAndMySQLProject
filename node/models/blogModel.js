// The models folder is created to read and write the data

// Import the connection to the db
import db from "../db/db.js";

import {DataTypes} from "sequelize";

const blogModel = db.define("userBlogs", {
    // Define the types of the fields
    title: { type: DataTypes.STRING},
    content: { type: DataTypes.STRING},
    // createdAt: { type: DataTypes.DATE},
    // updatedAt: { type: DataTypes.DATE},
});

export default blogModel
