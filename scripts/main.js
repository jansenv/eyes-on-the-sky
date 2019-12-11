import PhotoListComponent from "./Mars-Photos/MarsPhotosListComponent.js";
import PhotoOfTheDayListComponent from "./PhotoOfTheDay/PhotoOfTheDayListComponent.js";
import { getPhotos } from "./Mars-Photos/MarsPhotosDataProvider.js";

getPhotos().then(
    () => {
        PhotoListComponent()
    }
);

PhotoOfTheDayListComponent()