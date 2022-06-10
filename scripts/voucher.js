
let array = JSON.parse(localStorage.getItem("user"))||[]

let amount = JSON.parse(localStorage.getItem("amount"))||[]
document.getElementById("wallet_balance").innerHTML = amount


// let arrayy = JSON.parse(localStorage.getItem("purchase"))||[]

const url = `https://masai-vouchers-api.herokuapp.com/api/vouchers`

fetch(url).then(function(res){
    return res.json();

}).then(function(res){
    console.log(res);
append(res[0].vouchers)
}).catch(function(err){
    console.log(err);
})

function append(data){
    data.map(function(e){
        let box = document.createElement("div")
        let img = document.createElement("img")
        img.src = e.image
        img.style.height = "250px"
        img.style.width = "250px"
        let name = document.createElement("p")
        name.innerText = e.name
        let price = document.createElement("p")
        price.innerText = e.price
        let btn = document.createElement("button")
        btn.innerText = "buy"
        btn.addEventListener("click", function(){
            reducee(e)
        })
        box.append(img,name,price,btn)
        document.getElementById("container").append(box)
    })
}


function reducee(e){

    let abc = document.getElementById("amount").value
    let cost = eval(abc*100)
    if(amount>cost){
        amount = eval(amount-cost)
        
    }
}
// async function getItems(){
//     let getdata = JSON.parse(localStorage.getItem("user"))||[]
//     try{
//         const res = await fetch(`https://masai-vouchers-api.herokuapp.com/api/vouchers`)
//         const data = await res.json()
//         console.log(data)
//         appendData(data[0].vouchers)
//     }
//     catch(err){
//         console.log(err)
//     }
// }