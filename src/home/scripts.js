function recarregar() {
    window.location.reload();
}

//Nav Menu
var sidenav = document.getElementById("menu");

sidenav.addEventListener('click', () => {
    document.getElementById("mySidenav").style.width = "350px ";
})

var closeb = document.getElementById("close");
console.log(closeb)

closeb.addEventListener('click', () => {
    document.getElementById("mySidenav").style.width = "0px";
})

// Perfil.html
let photo = document.getElementById('imgPhoto');
let file = document.getElementById('flImage');

photo.addEventListener('click', () => {
    file.click();
});

file.addEventListener('change', (event) => {
    
    if (file.files.lenght <= 0) {
        return;
    }
    let reader = new FileReader();

    reader.onload = () => {
        photo.src = reader.result;
    }

    reader.readAsDataURL(file.files[0]);
});