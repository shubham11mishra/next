import mongoose from "mongoose";

const mongoURL = process.env.MONGO_DB_CONNECT;

export default async function DBconnect() {
    try {
        const connectionState = mongoose.connection.readyState
        if (connectionState == 1) {
            console.log('connected');
            
            return
        }
        if (connectionState == 2) {
            console.log('conecting...');
            return
        }
        await mongoose.connect(mongoURL!, {
            dbName: 'test',
            bufferCommands: true
        });
        console.log('new connection');

    } catch (error) {
        throw new Error(error)
    }
}