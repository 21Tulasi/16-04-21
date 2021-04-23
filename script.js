const firebaseConfig = {
    apiKey: "AIzaSyCuLAiphHcY4C8OLmL5JMDBJICjanQ5iMs",
    authDomain: "first-project-2b117.firebaseapp.com",
    projectId: "first-project-2b117",
    storageBucket: "first-project-2b117.appspot.com",
    messagingSenderId: "802006466926",
    appId: "1:802006466926:web:bb6e7e135da46f80fcc17f",
    measurementId: "G-FE7F33MXCC"
  };
firebase.initializeApp(firebaseConfig);
function insertData()
{
    uid=document.getElementById("uid").value;
    uname=document.getElementById("uname").value;
    email=document.getElementById("email").value;
    Ref=firebase.database().ref().child("users").child(uid);
    console.log(uname+" "+email);
    Ref.set({
        uid:uid,
        uname:uname,
        email:email
    });
    console.log("inserted");
}
function deleteData(a)
{
       
    uid=document.getElementById("uid1").value=a.parentElement.parentElement.cells[0].innerHTML;
    dbRef=firebase.database().ref().child("users").child(uid);
    dbRef.remove();
    reset();
    display();
    console.log("deleted");
}
function edit(a)
{
    document.getElementById("uid1").value=a.parentElement.parentElement.cells[0].innerHTML;
    document.getElementById("uname1").value=a.parentElement.parentElement.cells[1].innerHTML;
    document.getElementById("email1").value=a.parentElement.parentElement.cells[2].innerHTML;
    console.log("updated");
}
function updateData()
{
    uid=document.getElementById("uid1").value
    uname=document.getElementById("uname1").value;
    email=document.getElementById("email1").value;
    dbRef=firebase.database().ref().child("users").child(uid);
    dbRef.update({uid:uid,uname:uname,email:email});
    reset();
    display();

}
function display()
{
    var table=document.getElementById("tbody1");
    dbRef=firebase.database().ref().child("users/");
    dbRef.on("child_added",function(snap)
    {
       
        console.log(snap.key);
        row=table.insertRow(-1);
        cell1=row.insertCell(0);
        cell2=row.insertCell(1);
        cell3=row.insertCell(2);
        cell4=row.insertCell(3);
        cell1.innerHTML=snap.val().uid;
        cell2.innerHTML=snap.val().uname;
        cell3.innerHTML=snap.val().email;
        cell4.innerHTML='<a class="edit" data-toggle="modal" data-target="#my-modal1" onclick="edit(this)"><i class="fa fa-pencil"></i></a>&nbsp;&nbsp;<a href="#deleteEmployeeModal" class="delete" data-toggle="modal" onclick="deleteData(this)"><i class="fa fa-trash"></i></a>'
    ;
       
        
    });

    document.getElementById("tbody1").appendChild(table);
}
function reset()
{
    document.getElementById("tbody1").innerHTML=null;
    console.log("reset");
}