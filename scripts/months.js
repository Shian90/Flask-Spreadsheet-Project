let select = document.querySelector('select')
let button = document.querySelector('button')
let selectedMonth

fetch('http://127.0.0.1:5000/months')
    .then(response => response.json())
    .then(months => {
        monthArray = JSON.parse(months)
        console.log(monthArray)
        let options = monthArray.map((month) => `<option value = ${month}>${month} </option>`).join('\n')

        select.innerHTML = options
    })

select.addEventListener('click', ()=>{
    selectedMonth = select.options[select.selectedIndex].value
    console.log(selectedMonth)
    sessionStorage.setItem("month", selectedMonth);
})