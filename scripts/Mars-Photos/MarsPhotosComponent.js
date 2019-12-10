const MarsPhotosComponent = (photos) => {
    return `<img src=${photos.img_src}>
            <ul>
                <li>Probe name: ${photos.rover.name}</li>
                <li>Earth date: ${photos.earth_date}</li>
                <li>Camera name: ${photos.camera.name}</li>
            </ul>`
}

export default MarsPhotosComponent