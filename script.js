const content = document.getElementById("content") //id
const text = document.querySelector(".text")  //class มี dot

function displaytext() {
    content.innerHTML = "สบายใจ"
    content.style.color = "red"

    text.innerHTML = "Bad Guy"    
    text.style.color = "orange"
}