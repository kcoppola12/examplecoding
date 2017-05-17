let sets = prompt("How many sets of Chest Presses for today?");
let weight, exercise, reps;
let username = "test";
let password = "test";
let username1 = document.createElement("input"); 
let password1 = document.createElement("input");
let parent = document.getElementById("form");
let button1 = document.createElement("input");

username1.type = "text";
container.appendChild(username1);

password.type = "text";
container.appendChild(password1);

button1.type = "submit";
container.appendChild(button1);

function submit() {
if (username === "test" && password === "test1234") {
        sets;
     
    } else (username1 === " " || username.length ==> 8) {
        alert("Please enter a valid username");
    
}


for ( let i = 1; i <= sets; i ++) {
    exercise = "<input type = \"textbox\" value=\"Chest Press\">";
    weight = "<input type = \"number\" value=\"10\">";
    reps = "<input type = \"number\" value=\"10\"><br>";
document.write(exercise + "WEIGHT" + weight + "REPS"+ reps);
}

