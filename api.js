const express = require('express');
const mongodb = require('mongodb');
const dbConnect = require('./mongodb');
const app = express();
app.use(express.json());

app.get('/', async (req, res) => {
    try {
        let data = await dbConnect();
        data = await data.find().toArray();
        console.log(data);
        res.send(data);
    } catch (error) {
        console.error("Error connecting to the database: ", error);
        res.status(500).send({ error: "Internal Server Error" });
    }
});

app.post('/', async (req, res) => {
    try {
        let data = await dbConnect();
        let result = await data.insertOne(req.body);
        if (result.acknowledged) {
            res.send({ message: "Data added successfully", result });
        } else {
            res.status(500).send({ error: "Failed to add data" });
        }
    } catch (error) {
        console.error("Error inserting data into the database: ", error);
        res.status(500).send({ error: "Internal Server Error" });
    }
});

app.put('/', async (req, resp) => {
    try {
        let data = await dbConnect();
        let result = await data.updateOne(
            { name: req.body.name },
            { $set: req.body }
        );
        console.log(req.body);
        resp.send({ result: "Update successful", modifiedCount: result.modifiedCount });
    } catch (error) {
        console.error("Error updating data in the database: ", error);
        resp.status(500).send({ error: "Internal Server Error" });
    }
});

app.delete('/:id', async (req, res) => {
    try {
        let data = await dbConnect();
        let result = await data.deleteOne({ _id: new mongodb.ObjectId(req.params.id) });
        console.log(req.params.id);
        if (result.deletedCount > 0) {
            res.send({ message: "Delete successful", deletedCount: result.deletedCount });
        } else {
            res.status(404).send({ error: "Document not found" });
        }
    } catch (error) {
        console.error("Error deleting data from the database: ", error);
        res.status(500).send({ error: "Internal Server Error" });
    }
});

app.listen(5000, () => {
    console.log("Listening on port 5000");
});
