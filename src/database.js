import mongoose from 'mongoose';
import config from './config.js';

(async () => {
    try {
        const db = await mongoose.connect(`mongodb+srv://${config.MONGO_HOST}:${config.MONGO_PASSWORD}@mynotescluster.tbcl9ue.mongodb.net/?retryWrites=true&w=majority`);
        console.log("Database is connected to: ", db.connection.name);
        
    } catch (error) {
        console.error("The connection to database is broken ", error);
    }
})()