import React from 'react';
import Navbars from '../components/Navbars';

export default function Help() {
    return (
        <div className="flex flex-col ">
            <Navbars page={3} />
            <div className="flex flex-col items-center">
                <h1 className="text-5xl font-bold text-w">Welcome to the help page!</h1>
                <p className="py-6 text-2xl text-white">This is the help page, here you can find all the information you need to know about Character Cove.</p>
                <br></br>
                <h2 className="text-4xl font-bold text-w">How to create a character</h2>
                <p className="py-6 text-2xl text-white">
                <ol class="list-decimal pl-4">
                        <li>First, on hte home page you press the create character button in the top right</li>
                        <li>Then, you fill out the form with the character's name, class, level, description, abilities, and items that they have</li>
                        <li>Finally, you press the save button in the bottom right of the pop up, and you'll be able to use your new character!!!</li>
                    </ol>
                </p>
                <br></br>
                <h2 className="text-4xl font-bold text-w">How to delete a character</h2>
                <p className="py-6 text-2xl text-white">
                <ol className="list-decimal pl-4">
                        <li>First, on the home page you press the delete button on the character you want to delete</li>
                        <li>And that's pretty much it</li>
                    </ol>
                </p>
                <br></br>
                <h2 className="text-4xl font-bold text-w">How to recover a character</h2>
                <p className="py-6 text-2xl text-white">
                    <ol className="list-decimal pl-4">
                        <li>Click on the Profile button on the top right of the page.</li>
                        <li>You'll see a list of deleted characters in the "Deleted Characters" section. Click recover next to the character you want to get back</li>
                        <li>Go back to the home page and you should see your character back in your list of characters!</li>
                    </ol>    
                </p>
                <br></br>
                <h2 className="text-4xl font-bold text-w">How to edit/use a character</h2>
                <p className="py-6 text-2xl text-white">
                    <ol className="list-decimal pl-4">
                        <li>On the home page, on the character you want to use/edit, click the use button</li>
                        <li>You can then change any aspect of your character. As your adventure grows so can your character and you can add whatever you want!!!</li>
                        <li>When you're done using or editing the character, click the save button and your character is edited!</li>
                    </ol>
                </p>
                <br></br>
                <h2 className="text-4xl font-bold text-w">How to roll dice</h2>
                <p className="py-6 text-2xl text-white">
                    <ol className="list-decimal pl-4">
                        <li>On the home page, on the navbar you'll see two things in the middle, a button saying Roll Dice, and an input that says d20</li>
                        <li>Click the input and type in the size of dice you want to roll. Examples: if you want to roll a 6 sided di, you put 6. If you want a 20 sided di, you put 20.</li>
                        <li>Click the Roll Dice Button and you'll see your roll appear!!!</li>
                    </ol>
                    </p>
            </div>

        </div>
    )
}