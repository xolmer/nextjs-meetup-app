import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    // const { title, description, location, address } = data;
    const client = await MongoClient.connect("mongodb+srv://xolmer:SoruicW3Ajk7w7qP@meetup.12cobid.mongodb.net/meetups?retryWrites=true&w=majority");
    const db = client.db();
    const collection = db.collection("meetups");
    const result = await collection.insertOne(data);
    console.log(result);

    client.close();

    res.status(201).json({
      message: "Meetup created",
      data: data,
    });
  }
}

export default handler;
