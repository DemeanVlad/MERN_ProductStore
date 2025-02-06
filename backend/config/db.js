import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};
//async -> un promise si permite utilizarea await, aceasta are ca beneficiu de a nu incetini baza de date
//deoarece se fac req la server fara a bloca alte operatii