import React, {useState, useEffect} from "react";
import "../App.css";

export default function Meme() {
  const [allMemes, setAllMemes] = React.useState([]);
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1g8my4.jpg",
  });

  useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
    .then(res=>res.json())
    .then(data=>{
                  setAllMemes(data.data.memes);
                  // console.log(allMemes);
                }
        )
  },[])

  // console.log(allMemes)

  function handleChange(event){
    
    setMeme(prevMeme=>({
      ...prevMeme,
      [event.target.name]:event.target.value

    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    let url = allMemes[Math.floor(Math.random() * 100) + 1].url;
    console.log(url);
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: url,
      };
    });
  }
  return (
    <main className="main-section ">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input"
          placeholder="upper-text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          className="form-input"
          placeholder="bottom-text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        ></input>
        <button className="form-btn">
          Get a new meme image 📸
        </button>
      </form>
      <div className="meme-container">
        <img src={meme.randomImage} className="meme-img" alt="memeImage" />
        <h1 className="top-text">{meme.topText}</h1>
        <h1 className="bottom-text">{meme.bottomText}</h1>
      </div>
    </main>
  );
}
