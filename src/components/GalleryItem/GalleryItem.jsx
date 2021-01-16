export default function GalleryItem({beer, changeLikes}){

  //click handler
  const handleLikeClick = () => {
    console.log('clicked button', beer.id);
    changeLikes(beer.id);
    
  }

  return (
    <>
    <div className="beer-container">
      <img key={beer.id} src={beer.path} alt={beer.description}/>
      <button onClick={handleLikeClick} className="likeBtn btn">Love It!</button>
      <p>{beer.likes} people love this!</p>
    </div>

    </>


  )
}