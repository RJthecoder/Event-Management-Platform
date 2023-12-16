import mongoose from 'mongoose';

// const MONGODB_URI = 'mongodb+srv://jadhavranjitsingh561:<Ranjit1279>@raju.n6hddvn.mongodb.net/';
const MONGODB_URI = 'mongodb+srv://jadhavranjitsingh561:Ranjit1279@raju.n6hddvn.mongodb.net/';


let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URI) throw new Error('MONGODB_URI is missing');

  cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
    dbName: 'raju',
    bufferCommands: false,
    
  });

  cached.conn = await cached.promise;

  return cached.conn;
};
