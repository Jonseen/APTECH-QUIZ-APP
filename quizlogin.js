// code for the login
let output = document.getElementById("content");
let button = document.getElementById("submit");

button.addEventListener('click', () => {
let username = document.getElementById('username').value;
let password = document.getElementById('password').value;
if(username==='Joseph' && password === "joseph123"){
    window.open("file:///C:/Users/KHADIJAT/Videos/Crash Course/Quiz App/quiz main.html")
}

else{
    document.getElementById("alert").textContent = "Sorry, This exam is not for You";
}
});

