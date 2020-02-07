const userId = document.getElementById("userId");
const title = document.getElementById("title");
const description = document.getElementById("description");
const imageUrl = document.getElementById("imageUrl");
var price = document.getElementById("price");
const addBtn = document.getElementById("addBtn");

var tblUsers = document.getElementById('tbl_users_list');
var databaseRef = firebase.database().ref('mostbooked/');
var rowIndex = 1;

databaseRef.once('value', function(snapshot) {
snapshot.forEach(function(childSnapshot) {
var childKey = childSnapshot.key;
var childData = childSnapshot.val();
var childData1 = childSnapshot.val();
var childData2 = childSnapshot.val();

var row = tblUsers.insertRow(rowIndex);
var cellId = row.insertCell(0);
var cellName = row.insertCell(1);
var cellName1 = row.insertCell(2);
var cellName2 = row.insertCell(3);

cellId.appendChild(document.createTextNode(childKey));
cellName.appendChild(document.createTextNode(childData.title));
cellName1.appendChild(document.createTextNode(childData1.description));
cellName2.appendChild(document.createTextNode(childData2.price));

rowIndex = rowIndex + 1;
});
});