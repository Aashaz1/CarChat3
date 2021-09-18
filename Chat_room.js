var firebaseConfig = {
    apiKey: "AIzaSyC198O-YdizOyfDL4MX76Fp1uEleTzgGwc",
    authDomain: "carchat-9096f.firebaseapp.com",
    databaseURL: "https://carchat-9096f-default-rtdb.firebaseio.com",
    projectId: "carchat-9096f",
    storageBucket: "carchat-9096f.appspot.com",
    messagingSenderId: "68764452278",
    appId: "1:68764452278:web:4115d822165cc5cd666d17"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name -"+ Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick= 'redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function addRoom(){
   roomName=document.getElementById("roomName").value;
   firebase.database().ref("/").child("roomName").update({
         purpose: "adding room name"
   }) 
   localStorage.setItem("room_name", roomName)
   window.location= "Car_Page.html";
}

function redirectToRoomName(name){
   console.log(name);
   localStorage.setItem("roomName", name);
   window.location = "Car_Page.html"
}