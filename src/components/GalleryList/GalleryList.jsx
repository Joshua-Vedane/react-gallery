import GalleryItem from '../GalleryItem/GalleryItem.jsx'

export default function GalleryList({galleryList, changeLikes}){

  return(
    <div className = "gallery-field">
    <h2>My Gallery
      {galleryList.map(beer => (
        <GalleryItem key= {beer.id} beer={beer} changeLikes = {changeLikes} />
      ))}
    </h2>
    </div>
  )
}

