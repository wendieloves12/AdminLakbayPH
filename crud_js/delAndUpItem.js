const userId = document.getElementById("userId");
const title = document.getElementById("title");
const description = document.getElementById("description");
const imageUrl = document.getElementById("imageUrl");
const price = document.getElementById("price");
const addBtn = document.getElementById("addBtn");

const email = document.getElementById("email");
const password = document.getElementById("password");

const database = firebase.database();
const rootRef = database.ref('mostbooked');



    updateBtn.addEventListener('click', (e) => {
        e.preventDefault();
            const newData = {
                title: title.value,
                description: description.value,
                imageUrl: imageUrl.value,
                price: price.value
        };
            rootRef.child(userId.value).update(newData);   
            window.alert("Updated succesfully"); 
            reload_page();
        });

    function reload_page(){
        window.location.reload();
    }
    

    var tblUsers = document.getElementById('tbl_users_list');
    var databaseRef = firebase.database().ref('mostbooked/');
    var rowIndex = 1;

    databaseRef.once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
    var childKey = childSnapshot.key;
    var childData = childSnapshot.val();
    var childData1 = childSnapshot.val();
    var childData2 = childSnapshot.val();
    var childData3 = childSnapshot.val();

    var row = tblUsers.insertRow(rowIndex);
    var cellId = row.insertCell(0);
    var cellName = row.insertCell(1);
    var cellName1 = row.insertCell(2);
    var cellName2 = row.insertCell(3);
    var cellName3 = row.insertCell(4);

    cellId.appendChild(document.createTextNode(childKey));
    cellName.appendChild(document.createTextNode(childData.title));
    cellName1.appendChild(document.createTextNode(childData1.description));
    cellName2.appendChild(document.createTextNode(childData1.imageUrl));
    cellName3.appendChild(document.createTextNode(childData2.price));

    rowIndex = rowIndex + 1;
    });
    });

