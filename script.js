const change = document.querySelector(".light")
function displayDark(){
    change.setAttribute("class","container dark")
}
function displayLight(){
    change.setAttribute("class","container light")
}

const menu = document.getElementById("menu")
let count = 1
function add_item() {
    const item = document.createElement("li")
    item.innerHTML = `Item${count++}`
    menu.appendChild(item)   
}
    
