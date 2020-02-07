const userId = document.getElementById("userId");
const title = document.getElementById("title");
const description = document.getElementById("description");
const imageUrl = document.getElementById("imageUrl");
const price = document.getElementById("price");
const addBtn = document.getElementById("addBtn");

const database = firebase.database();
const rootRef = database.ref('mostbooked');

    removeBtn.addEventListener('click', e => {
    e.preventDefault();
   
        rootRef.child(userId.value).remove()
        .then(() => {
          
                window.alert( "Item removed");
                reload_page();
                
        })
        .catch(error => {
            console.error(error);
            alert(errorMessage);
        });   
    
        function reload_page(){
            window.location.reload();
        }
    });

    
    

