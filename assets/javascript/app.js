// 1. Initialize Firebase
var config = {
    apiKey: "AIzaSyCtzl6DPRkjNP98-QAjgBW5X2ygRn3Bi88",
    authDomain: "trian-schedule.firebaseapp.com",
    databaseURL: "https://trian-schedule.firebaseio.com",
    projectId: "trian-schedule",
    storageBucket: "trian-schedule.appspot.com",
    messagingSenderId: "921568046102"
  };
  firebase.initializeApp(config);

var database = firebase.database()

//2. button for adding trains
$("#add-train-btn").on("click", function(event){
    event.preventDefault();

    // grabs the users input
    var trnName =$("#train-name-input").val().trim();
    var trnDestination =$("#destination-input").val().trim();
    var trnFrequency =$("#frequency-input").val().trim();
    var trnFirstTrain =$("#train-input").val().trim();
    // console.log(trnFirstTrain);
    // console.log(moment(trnFirstTrain, "HH:mm"))

    // create local temporary objects for holding train data

    var newTrain = {
        name: trnName,
        destination: trnDestination,
        frequency: trnFrequency,
        firstTrain: trnFirstTrain,


    };
    // Upload train data to the database
    database.ref().push(newTrain);
    
    // logs everything to the console
    // console.log(newTrain.name);
    // console.log(newTrain.destination);
    // console.log(newTrain.frequency);
    // console.log(newTrain.firstTrain)

    // alert 
    // alert(" train successfully added");

    // clear all of the text-boxes

    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#frequency-input").val("");
    $("#train-input").val("");
});

// // 3. create firebase event for adding train to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot, prevChildKey){
    // console.log(childSnapshot.val());

    // store everything into a variable 
    var trnName = childSnapshot.val().name;
    var trnDestination=  childSnapshot.val().destination;
    var trnFrequency=  childSnapshot.val().frequency;
    var trnFirstTrain= childSnapshot.val().frequency;

    // train info
    console.log(trnName);
    console.log(trnDestination);
    console.log(trnFrequency);
    console.log(trnFirstTrain)
//     // prettify the employee start

//     // var trnStartPretty = moment.unix(trnFrequency).format("MIN");
//     //  // Calculate the months worked using hardcore math
//     //  // 

//     // add each train data into the table 
$("#train-table > tbody").append("<tr><td>" + trnName + "</td><td>" + trnDestination + "</td><td>" + trnFrequency + "</td><td>" + "Months" + "</td><td>"  + "Minutes away" + "</td></tr>")

});