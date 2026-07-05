import { MongoClient } from 'mongodb';
const client = new MongoClient(process.env.DB_URI);
export async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("You successfully connected to MongoDB!");
    return client;
  } catch (err) {
    console.dir(err);
  }
}

const connect = collection => {
     const database = process.env.DB_NAME;
     return client.db(database).collection(collection);
}

export default connect;
