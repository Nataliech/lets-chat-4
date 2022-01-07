//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyBE6NGYdYEdVQE26lolAiqthGBu3fXT5b4",
      authDomain: "kwitter-134ba.firebaseapp.com",
      databaseURL: "https://kwitter-134ba-default-rtdb.firebaseio.com",
      projectId: "kwitter-134ba",
      storageBucket: "kwitter-134ba.appspot.com",
      messagingSenderId: "150503542932",
      appId: "1:150503542932:web:79480253ece685b190e481"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name= localStorage.getItem("user_name");
room_name= localStorage.getItem("room_name");

function send(){

      msg = document.getElementById("Message").value ;
      firebase.database().ref(room_name).push({
            name: user_name, 
            message: msg,
            like: 0

      });

      document.getElementById("Message").value= "";

}



































function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code



//End code
      } });  }); }
getData();
