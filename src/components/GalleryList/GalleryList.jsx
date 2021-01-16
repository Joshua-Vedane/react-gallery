import GalleryItem from '../GalleryItem/GalleryItem.jsx'

export default function GalleryList({galleryList}){

  return(
    <div className = "gallery-field">
    <h2>My Gallery
      {galleryList.map(beer => (
        <GalleryItem key= {beer.id} beer={beer} />
      ))}
    </h2>
    </div>
  )
}

