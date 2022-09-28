document.addEventListener("DOMContentLoaded", () => {

    let form = document.querySelector('form') //seeks 'form' class in html
    form.addEventListener('submit', (e) => { //readies the submit button, preps event(e) for function 
        e.preventDefault(); //safeguard for something
        buildUserInput(e.target.todayDate.value, e.target.birthDate.value ) //function below. 
        form.reset()
    })
})

function buildUserInput(today, birth){
    
    const a = today
    const b = birth
    yearsOld = a - b
    monthsOld = yearsOld * 12
   
    let p = document.createElement('p')
    p.textContent = "Your are " + monthsOld + " months old."
    document.querySelector('#myInfo').appendChild(p)

    
 }




