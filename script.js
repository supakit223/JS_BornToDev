const box = document.getElementById("box")

function add_default() {
    box.classList.remove("lightmode")
    box.classList.remove("darkmode")
}

function add_dark() {
    box.classList.remove("lightmode")
    box.classList.add("darkmode")
}

function add_light() {
    box.classList.remove("darkmode")
    box.classList.add("lightmode")
}

   
