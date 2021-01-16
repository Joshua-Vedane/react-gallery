import { useState } from 'react';
import './GalleryItem.css';
export default function GalleryItem({ beer, changeLikes }) {

  //hook for view toggle img/description
  // false = display image
  const [toggleView, setToggleView] = useState(false);
  // toggle view click handler
  const handleToggleView = () => {
    setToggleView(!toggleView)
  }

  //determines whether img or text is displayed
  const displayToggleView = () => {
    if (toggleView === false) {
      return (
        <img key={beer.id} src={beer.path} alt={beer.description} />
      )
    } else {
      return (
        <p>{beer.description}</p>
      )
    }
  }

  //determines which 'likes' text to show
  const displayLikes = () => {
    if(beer.likes > 0){
      return(
        <p>{beer.likes} people love this!</p>
      )
    }else{
      return(
        <p>No people love this :&#40;</p>
      )
    }
  }

  //Like button click handler
  const handleLikeClick = () => {
    console.log('clicked button', beer.id);
    changeLikes(beer.id);
  }

  return (
    <>
      <div className="col mx-auto item-container">
        <div className="item-display d-flex align-items-center justify-content-center mx-auto " onClick={handleToggleView}>
          {displayToggleView()}
        </div>
        <button onClick={handleLikeClick} className="likeBtn btn-dark">Love It!</button>
        {displayLikes()}
        
      </div>
    </>
  )
}