import {MongoClient} from 'mongodb'

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
        res.status(422).json({message: 'invalid input'})
        return;
    }
    //store it in a db
    const newMessage = {
        email,
        name,
        message
    };

    let client;
    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.domp7.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`

    try {
     client = await MongoClient.connect('mongodb+srv://FredyVelasquez:SanIsidro31.@cluster0.domp7.mongodb.net/my-site?retryWrites=true&w=majority')

    }  catch (error) {
        res.status(500).json({message: 'could not connect to db'})
        return;
    }

    const db = client.db();

    try {
        const result = await db.collection('messages').insertOne(newMessage);
        newMessage.id = result.insertedId;
    } catch (error) {
        client.close()
        res.status(500).json({message: 'storing message failes'})
    }

    client.close();

    res
        .status(201)
        .json({message: 'Succesfully ', message: newMessage})
  }
}

export default handler;
