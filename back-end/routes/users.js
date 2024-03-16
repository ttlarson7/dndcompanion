import { Router } from "express"
import User from "../models/User.js"

const router = Router();

router.get("/get", async (req, res) => {
    try {
        const userId = req.query.userId;

        // Create an object with the search criteria and the data to update or insert
        const filter = { userId: userId };
        const update = {
            $setOnInsert: { 
                userId: userId,
                numCharacters: 0
        } };

        // Options to findOneAndUpdate() method
        const options = {
            upsert: true,        // If document doesn't exist, create it
            new: true,           // Return the modified document if it exists or was created
            useFindAndModify: false  // Required for Mongoose 5.x and above
        };

        // Use findOneAndUpdate() to find or create a user
        const user = await User.findOneAndUpdate(filter, update, options).exec();
      
        res.status(200).send(user);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

router.post("/update/numCharacters", async (req, res) => {
    try {
        const userId = req.body.userId;
        const numCharacters = req.body.numCharacters;
        const user = await User.findOneAndUpdate({ userId: userId }, { numCharacters: numCharacters }, { new: true }).exec();
        res.status(200).send(user);

    } catch (error)
    {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
})


export default router;