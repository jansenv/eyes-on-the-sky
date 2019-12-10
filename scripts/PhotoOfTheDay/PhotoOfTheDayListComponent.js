import { usePhotoOfTheDay } from "./PhotoOfTheDayDataProvider.js";
import PhotoOfTheDayComponent from "./PhotoOfTheDayComponent.js";

const eventHub = document.querySelector(".container");

const PhotoOfTheDayListComponent = () => {
  console.log("***I am the photo of the day list component***");
  const photoHub = document.querySelector(".AllPhotos");
  const photoOfTheDay = usePhotoOfTheDay();

  photoHub.innerHTML += 
  `<section id="photoOTD">
  ${photoOfTheDay
        .map(currentPhoto => PhotoOfTheDayComponent(currentPhoto))
        .join("")}
  </section>`
};

export default PhotoOfTheDayListComponent;