import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx'

function App() {
  //hooks
  const [galleryList, setGalleryList] = useState([]);


  //get data 
  const getGalleryList = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      console.log('GalleryList from server', response.data);
      //set galleryList with data from server
      setGalleryList(response.data);
    }).catch((error) => {
      console.log('error on get: ', error);
    })
  }

  //put route for adding likes
  const changeLikes = (beerId) => {
     const id = beerId;
     console.log('put req with:' , id);
    axios({
      method: 'PUT',
      url: `/gallery/like/${id}`
    }).then((response) =>{
      getGalleryList();
    }).catch((error) => {
      console.log('error in PUT', error);
    })
  }

  // populate dom on component load
  useEffect(() => {
    getGalleryList();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Galerie Deutsches Bier</h1>
      </header>
      <GalleryList
        galleryList={galleryList} 
        changeLikes ={changeLikes} 
      />
    </div>
  );
}

export default App;
