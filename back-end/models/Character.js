import mongoose from 'mongoose';
//characterName: "Billy", characterClass: "fighter", characterLevel: 1, stats: [10,10,10,10,10,10], 
//characterDescription: "He is billbBob", characterAbilities: "Billy can do billy things", characterItems: "Earth"
const characterSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    characterName: {
        type: String,
        required: true,
    },
    characterLevel: {
        type: Number,
        required: true,
    },
    characterClass: {
        type: String,
        required: true,
    },
    characterDescription: {
        type: String,
        required: true,
    },
    characterAbilities: {
        type: String,
        required: true,
    },
    characterItems: {
        type: String,
        required: true,
    }
    
});

const Character = mongoose.model('Character', characterSchema);
export default Character;