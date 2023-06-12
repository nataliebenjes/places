//UI Logic
let destinationBook = new DestinationBook();

function handleFormSubmission(event) {
    event.preventDefault();
    let inputtedPlace = document.querySelector("input#new-destination-name").value;
    let inputtedDate = document.querySelector("input#new-date-name").value;
    let inputtedExperience = document.querySelector("input#new-experience-name").value;
    let newPlace = new Place(inputtedPlace, inputtedDate, inputtedExperience);

    destinationBook.addPlace(newPlace);
    console.log(destinationBook.places);

}

window.addEventListener("load", function () {
    this.document.querySelector("form#new-destination").addEventListener("submit", handleFormSubmission);
});



//buisness logic
function DestinationBook(){
this.places ={};
this.currentId = 0;

}
DestinationBook.prototype.assignId = function(){
    this.currentId += 1;
    return this.currentId;
};

function Place(location, date, experience){
    this.location = location;
    this.date = date;
    this.experience =experience; 
}

DestinationBook.prototype.findPlace = function(id){
    if (this.places[id] !== undefined) {
    return this.places[id];
    }
    return false;
};

Place.prototype.allInfo = function(){
    return this.location + this.date + this.experience;
};

DestinationBook.prototype.addPlace = function(place){
    place.id = this.assignId();
    this.places[place.id] = place;


};


// let place1 = new Place("Afognak", "2019", "Kitoi Bay Hatchery Seasonal Job");
// let place2 = new Place("Marseille","2022", "Proposed to off the tip of Il Dou Froui");



