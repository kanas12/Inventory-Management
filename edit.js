document.querySelector("#itemName").value = JSON.parse(localStorage.getItem("editItem")).itemName
document.querySelector("#price").value = JSON.parse(localStorage.getItem("editItem")).price
document.querySelector("#payment").value = JSON.parse(localStorage.getItem("editItem")).payment
document.querySelector("#status").value = JSON.parse(localStorage.getItem("editItem")).status
