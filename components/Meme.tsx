import React from "react";
import memeData from '../src/memesData'
import { useState } from "react";

export default function Meme() {
    const [memeImage, setMemeImage] = useState('')

    function getMemeImage() {
        
        const memesArray = memeData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)

        setMemeImage(memesArray[randomNumber].url) // Set random url to new state
        
    }

    return (
        <main>
            <div className="form">
            <input className = 'form--input' type="text" placeholder="Top text"></input>
            <input className = 'form--input' type="text" placeholder="Bottom-text"></input>
            <button className="form--button" onClick={getMemeImage}>GET A NEW MEME IMAGE📺</button>
        </div>

        <img src = {memeImage} className ="meme--image"/>

        </main>
    )
} 