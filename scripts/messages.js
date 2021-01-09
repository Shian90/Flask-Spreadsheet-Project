let selectedMonth = sessionStorage.getItem("month")
let selectedBatch = sessionStorage.getItem("Batch")
console.log(selectedMonth)
console.log(selectedBatch)

function generateMessages(){
    fetch('http://127.0.0.1:5000/generatemessage', {
  method: 'post',
  headers: {
    'Accept': 'application/json, text/plain, /',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({month: selectedMonth, batch: selectedBatch})
}).then(res=> res.json()).then(result =>{
    let messageBox = document.getElementById("xxx")
    //console.log(result)
    let messagesArray = JSON.parse(result)
    console.log(messagesArray)
    messagesArray.forEach((message) =>{
       // messageText = message + "        "
       // messageBox.appendChild(message)
       var text = document.createTextNode(message);
       messageBox.appendChild(text)
       var steak = document.createElement("br")
       messageBox.appendChild(steak)
    })
})
}

function generateInvoice(){
    fetch('http://127.0.0.1:5000/generateinvoices', {
  method: 'post',
  headers: {
    'Accept': 'application/json, text/plain, /',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({month: selectedMonth, batch: selectedBatch})
}).then(()=> alert("Done!"))

}