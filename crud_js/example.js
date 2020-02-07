const userId = document.getElementById("userId");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const age = document.getElementById("age"); 
const addBtn = document.getElementById("addBtn");

const database = firebase.database();
const rootRef = database.ref('product');

    addBtn.addEventListener('click', (e) => {
        e.preventDefault();   
            const autoID = rootRef.push().key
            rootRef.child(autoID).set({
                
                fname: fname.value,
                lname: lname.value,
                age: age.value
        });
            alert("Item added succesfully");
            reload_page(); 
    }); 
    function reload_page(){
        window.location.reload();
    }
