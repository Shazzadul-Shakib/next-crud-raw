// import mongoose from "mongoose";

// const connectMongoDB =async () => {
//   try {
//    await  mongoose.connect(process.env.MONGO_URI);
//     console.log("Connected to mongoDB");
    
//   }
//   catch(error) {
//     console.log(error);
//   }
// }
// export default connectMongoDB;

import mongoose from 'mongoose'


const MONGODB_URI = process.env.MONGO_URI

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}
// It stores the connection and promise in a cached object to ensure that
//  only one connection is established and reused if already connected.
let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function connectMongoDB() {
  // Check if a connection already exists in cached.conn. If it does, return the existing connection.
  if (cached.conn) {
    return cached.conn;
  }
  // If there's no existing connection, check if there's an existing connection promise in cached.promise.
  //  If there is, it means that a connection is already in the process of being established, so return that promise.
  //  If there's neither a connection nor a promise, create an options object opts with the bufferCommands option set to false.
  //  This option controls whether or not Mongoose buffers commands,
  //  which can be useful in certain scenarios, but in this case, it's explicitly set to false.
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
    //  Establish a new connection to the MongoDB database using mongoose.connect(MONGODB_URI, opts). This returns a promise that resolves to the Mongoose connection object when the connection is successfully established.
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }
  //  The connection details are cached in cached.conn, and the promise in cached.promise is set to this promise.
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
    // If any error occurs during the connection process, it sets cached.promise to null and throws the error.
  }
  //  it returns the established connection stored in cached.conn
  return cached.conn;
}

export default connectMongoDB