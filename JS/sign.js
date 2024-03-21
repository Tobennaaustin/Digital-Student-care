const first = document.getElementById("first");
const second =document.getElementById("second");
const conti = document.getElementById("conti");
const submit = document.getElementById("submit");
const name = document.getElementById("name");
const age = document.getElementById("age");
const phone =document.getElementById("phone");
const level = document.getElementById("level");
const depart =document.getElementById("depart");
const matric = document.getElementById("matric");
const passport = document.getElementById("passport");
const house = document.getElementById("house");
const data = document.getElementById("data");
const back = document.getElementById("back");

second.style.display="none";
submit.style.display ="none";

conti.addEventListener('click', () => {
    const secondName = name.value; 
    const secondAge = age.value;
    const secondPhone = phone.value;
    const secondLevel = level.value;
    const secondDepart = depart.value;
    
    if(!name.value){
        name.style.border = "2px solid red";
    } else if (!age.value) {
        age.style.border = "2px solid red";
    } else if (!phone.value){
        phone.style.border = "2px solid red";
    } else if (!level.value){
        level.style.border = "2px solid red";
    } else if (!depart.value){
        depart.style.border = "2px solid red";
    } else{
        conti.style.display= "none";
        first.style.display ="none";
        second.style.display ="block";
        submit.style.display ="block";
    }
});

back.addEventListener('click', () => {
    second.style.display = "none";
    first.style.display = "block";
    submit.style.display = "none";
    conti.style.display = "block";
});
