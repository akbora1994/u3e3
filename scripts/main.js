let array = JSON.parse(localStorage.getItem("user"))||[]




function getData(){
    event.preventDefault();

    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let address = document.getElementById("address").value
    let amount = document.getElementById("amount").value
    
    let obj = {
        name: name,
        email: email,
        address: address,
        amount: amount,
    }
    array.push(obj);
    localStorage.setItem("user", JSON.stringify(array))

   

   
    
}

