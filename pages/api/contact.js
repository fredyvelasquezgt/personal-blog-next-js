import {MongoClient} from 'mongodb'

function handler(req, res) {
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

    MongoClient.connect('mongodb+srv://<username>:<password>@cluster0.domp7.mongodb.net/?retryWrites=true&w=majority')

    res
        .status(201)
        .json({message: 'Succesfully ', message: newMessage})
  }
}

export default handler;
