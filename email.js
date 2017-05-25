let firstName = document.getElementById("first");
let lastName = document.getElementById("last");
let email = document.getElementById("email");
let username = document.getElementById("username");
let brought = document.getElementById("brought");
let led = document.getElementById("led");
let workOutLocation = document.getElementById("wlocation");
let region = document.getElementById("region");
let newMember = [["First Name:", firstName.value]];;

document.getElementsByClassName("field");
form.style.backgroundColor="lightgray";
form.style.border=".0678em solid black";

function sendemail() {
    let link = "mailto:kcoppola12@gmail.com"
            + "?cc=kcoppola12@gmail.com"
             + "&subject=" + escape("Invite")
             + "&body=" + escape('Test')
    ;

    window.location.href = link;

}