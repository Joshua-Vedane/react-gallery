export default function GalleryItem({beer}){
  return (
    <>
    <div className="beer-container">
      <img key={beer.id} src={beer.path} alt={beer.description}/>
      <button className="likeBtn btn">Love It!</button>
      <p>{beer.likes} people love this!</p>
    </div>

    </>


  )
}