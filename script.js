var number = 10
var fname = "Ton"
console.log(number , typeof number)
console.log(fname , typeof fname)
// alert("KUY")
let data = prompt("กรอกเลขที่ต้องการซื้อ 0-9 :")
// console.log(data , typeof data)
// console.log("เลขของคุณคือ  "+data)
let random_number = Math.floor(Math.random()*10)

document.getElementById("result1").innerText = data
document.getElementById("result2").innerHTML = random_number

if(data == random_number){
    document.getElementById("result3").innerText = "คุณถูกรางวัล"
}else{
    document.getElementById("result3").innerText = "คุณไม่ถูกรางวัล"
}
