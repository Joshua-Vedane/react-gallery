import GalleryItem from '../GalleryItem/GalleryItem.jsx'
import './GalleryList.css';
export default function GalleryList({galleryList, changeLikes}){

  return(
    <>
    <h2 className="gallery-name">My Gallery</h2>
    <div className = " container gallery-field">
      <div className="row row-cols-3">
    
      {galleryList.map(beer => (
        <GalleryItem key= {beer.id} beer={beer} changeLikes = {changeLikes} />
      ))}
      </div>
    </div>
    </>
  )
}

