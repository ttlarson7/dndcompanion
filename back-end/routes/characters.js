import {Router} from "express"
import Character from "../models/Character.js"

const router = Router();

router.post("/new", async (req, res) => {
    
    try {
        // Create a newinstance of your Mongoose model using the parsed request body
        const newCharacter = new Character(req.body);
        
        // Validate and save the data
        await newCharacter.save();
        // Send a response
        res.status(201).send(newCharacter);
    } catch (error) {
        // Handle errors
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
}) 

router.post("/get", async (req, res) => {
    try {
        const userId = req.query.userId;
        const characters = await Character.find({ userId: userId }).exec();
        res.status(200).send(characters);
    } catch (error) {
        // Handle errors
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

router.post("/update", async (req, res) => {
    try {
        const characterId = req.query.characterId;
        const updatedCharacter = await Character.findByIdAndUpdate(characterId, req.body, { new: true }).exec();

    } catch (error) {
        // Handle errors
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

export default router;