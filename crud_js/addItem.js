const userId = document.getElementById("userId");
const title = document.getElementById("title");
const description = document.getElementById("description");
const imageUrl = document.getElementById("imageUrl"); 
var price = document.getElementById("price");

const addBtn = document.getElementById("addBtn");

const database = firebase.database();
const rootRef = database.ref('mostbooked');

    addBtn.addEventListener('click', (e) => {
        e.preventDefault();   
            const autoID = rootRef.push().key
            rootRef.child(autoID).set({
                
                title: title.value,
                description: description.value,
                imageUrl: imageUrl.value,
                price: price.value
        });
            alert("Item added succesfully");
            reload_page(); 
    }); 
    function reload_page(){
        window.location.reload();
    }
