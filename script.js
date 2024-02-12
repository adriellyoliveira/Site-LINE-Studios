let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
}, 4000)


function nextImage(){
    count++;
    if(count>5){
        count = 1;
    }
    
    document.getElementById("radio"+count).checked = true;

}
/**
 * Carrossel
 */





function toggleArrow() {
    var arrow = document.getElementById("arrow");
    var dropdown = document.querySelector(".dropdown");
    var dropdownStyle = window.getComputedStyle(dropdown);

    if (dropdownStyle.display === "block") {
        dropdown.style.display = "none";
        arrow.innerHTML = "&#9662;"; // Define a seta para baixo quando o menu está fechado
    } else {
        dropdown.style.display = "block";
        arrow.innerHTML = "&#9652;"; // Define a seta para cima quando o menu está aberto
    }
}
/**
 * Setinha do Artistas
 */






const container = document.getElementById('container');
const loginBtn = document.getElementById('login');
const registerBtn = document.getElementById('register');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});


loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});