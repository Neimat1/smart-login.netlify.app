var userNameInput = document.getElementById("userName");
var userEmailInput = document.getElementById("userEmail");
var userPassInput = document.getElementById("userPass");

// console.log(userName,userEmail,userPass);
var users=[];
function addUser(){
    if(!checkIsEmpty()){
        var user = {
            name:userNameInput.value,
            email:userEmailInput.value,
            password:userPassInput.value,
        }
        users.push(user);
    }
    else{
        displayRequired();
    }
   
   
};

function checkIsEmpty(){
    if(userNameInput.value!="" && userPassInput.value !="" && userEmailInput.value !=""){
        return false;
    }
    else{
        return true;
    }
}
function displayRequired(){
    document.getElementById("required").innerHTML="All inputs is required";
    console.log("saba7 el 5ra")
}

// function welcome(){
//     var helloMessage=``;
//     for(var i=0; i<users.length;i++){
//         helloMessage +=`<h1>Welcome ${users[i].name} </h1>`;
//     }
//     document.getElementById("welcome").innerHTML=helloMessage;
//     console.log("Done");
// };