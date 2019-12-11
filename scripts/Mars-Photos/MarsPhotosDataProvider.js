let MarsRoverPhotoData = []

export const getPhotos = () => {

    console.log("I am going to fetch the Mars Rover photos")

    return fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2012-12-10&api_key=IszFdNjfXi7YJMewxHgyujMOgAH5nYYvKyMUIy6d", {
        method: "GET"
    })
        .then(response => response.json())
        .then(
            parsedMarsRoverPhotoData => {
                console.log("***I have the Mars Rover photo data***")
                MarsRoverPhotoData = parsedMarsRoverPhotoData
            }
        )
}

export const usePhotos = () => {
    return MarsRoverPhotoData
}