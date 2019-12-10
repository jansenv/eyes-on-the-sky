import { usePhotos } from "./MarsPhotosDataProvider.js";
import MarsPhotosComponent from "./MarsPhotosComponent.js";

const eventHub = document.querySelector(".container");

const PhotoListComponent = () => {
  console.log("***I am the mars photo list component***");
  const photoHub = document.querySelector(".AllPhotos");
  const photosCollection = usePhotos();

  photoHub.innerHTML += 
  `<section id="marsPhotos">
  ${photosCollection.photos
        .map(currentPhoto => MarsPhotosComponent(currentPhoto))
        .join("")}
  </section>`
};

export default PhotoListComponent;