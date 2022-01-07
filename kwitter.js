function adduser(){

    user_name= document.getElementById("user_name").value ;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";

}

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDO72-e3ALUvRW1ZKmH_83QF6WvYwTC5Mw",
    authDomain: "kwitter-11a59.firebaseapp.com",
    databaseURL: "https://kwitter-11a59-default-rtdb.firebaseio.com",
    projectId: "kwitter-11a59",
    storageBucket: "kwitter-11a59.appspot.com",
    messagingSenderId: "793575252103",
    appId: "1:793575252103:web:65351b119f193d4a709822"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log("firebase_message_id");
console.log("message_data");
name = message_data ['name'];
message = message_data ['message'];
like = message_data['like'];
name_with_tag = "<h4>" + name +
//End code
    } });  }); }
getData();
