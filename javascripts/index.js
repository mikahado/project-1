document.addEventListener("DOMContentLoaded", () => {

    let form = document.querySelector('form') //seeks 'form' class in html
    form.addEventListener('submit', (e) => { //readies the submit button, preps event(e) for function 
        e.preventDefault(); //safeguard for something
        buildUserInput(e.target.todayDate.value, e.target.birthDate.value) //function below. 
        console.log(form)
        form.reset()
    })
})

function buildUserInput(todayDate, birthDate){
    //solution: add four parameters, birthMonth, birthYear, todayMonth, todayYear
    const todayYear = todayDate.slice(0, 4)
    const birthYear = birthDate.slice(0, 4)
    const birthMonth = birthDate.slice(5,7)
    // console.log(todayYear)
    // console.log(birthYear)
    // console.log(birthMonth)
    monthsByYear = (todayYear - birthYear) * 12
    // console.log(monthsByYear)
    monthAge = monthsByYear + parseInt(birthMonth)
    // console.log(monthAge)

    percentThrough = monthAge / 10
   
    let p = document.createElement('p')
    p.textContent = "You have lived " + monthAge + " months. You are now " + percentThrough + "% through life." 
    document.querySelector('#myInfo').appendChild(p)

 }




