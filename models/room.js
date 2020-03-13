class Room{
    constructor(
        id,
        building, 
        name, 
        floor, 
        capacity, // How many seats do we have
        type, // Clinic, class, conference 
        images,// Array of images
        description,
        features,// Array of pre-defined features
        ){
            this.id = id;
            this.building = building;
            this.name = name;
            this.floor = floor;
            this.capacity = capacity;
            this.type = type;
            this.images = images;
            this.description = description;
            this.features = features;
        }
}
export default Room;