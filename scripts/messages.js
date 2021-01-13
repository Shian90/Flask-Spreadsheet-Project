let selectedMonth = sessionStorage.getItem("month")
let selectedBatch = sessionStorage.getItem("Batch")
let infoMsgInv = document.getElementById("monthBatch")
console.log(selectedMonth)
console.log(selectedBatch)

infoMsgInv.innerHTML = "Generating messages for " + selectedMonth + " Batch " + selectedBatch

function generateMessages(){
    fetch('https://cherryapi.herokuapp.com/generatemessage', {
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
    messagesArray.forEach((message) =>{
       console.log(message)
       let messageTemp = message.replace(/(\r\n|\n|\r)/gm, "<br>");
       var text = document.createElement("p");
       text.innerHTML = messageTemp
       messageBox.appendChild(text)
       var steak = document.createElement("br")
       messageBox.appendChild(steak)
    })
})
}

function generateInvoice(){
    fetch('https://cherryapi.herokuapp.com/generateinvoices', {
  method: 'post',
  headers: {
    'Accept': 'application/json, text/plain, /',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({month: selectedMonth, batch: selectedBatch})
}).then(()=> alert("Done!"))
}

function goBatches()
{
    sessionStorage.removeItem("month")
    sessionStorage.removeItem("Batch")
}