let selectedMonth = sessionStorage.getItem("month")
console.log(selectedMonth)
let batchesList = document.querySelector("select")

fetch('https://cherryapi.herokuapp.com/batches', {
  method: 'post',
  headers: {
    'Accept': 'application/json, text/plain, /',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({month: selectedMonth})
}).then(res=> res.json()).then(result =>{
    //console.log(result)
    let batchesArray = JSON.parse(result)
    console.log(batchesArray)
    let options = batchesArray.map((batch) => `<option value = ${batch} >Batch ${batch} </option>`).join('\n')

        batchesList.innerHTML = options
})

batchesList.addEventListener('click', ()=>{
    let selectedBatch = batchesList.options[batchesList.selectedIndex].value
    console.log(selectedBatch)
    sessionStorage.setItem("Batch", selectedBatch);
})

function goMonths()
{
    sessionStorage.removeItem("month")
}