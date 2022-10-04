document.addEventListener("DOMContentLoaded", () => {

    let form = document.querySelector('form') //seeks 'form' class in html
    let msg = document.getElementById('comments')
    // let specs = document.getElementById('myBtn')

    form.addEventListener('submit', (e) => { //readies the submit button, preps event(e) for function 
        e.preventDefault(); //safeguard for something
        monthCalc(e.target.todayDate.value, e.target.birthDate.value) //function below. 
 
    })

    msg.addEventListener('submit', (e) => { //readies the submit button, preps event(e) for function 
        e.preventDefault(); //safeguard for something
        myMsg(e.target.monthPlan.value) //function below. 
        msg.reset()
    })

    // specs.addEventListener('click', (e) => { //readies the click button, preps event(e) for function 
    //     e.preventDefault(); //safeguard for something
    //     myFunction(e.target.specData.value); //function below. 
    // })

})

function monthCalc(todayDate, birthDate){

    const todayYear = todayDate.slice(0, 4)
    const todayMonth = todayDate.slice(5, 7)
    const birthYear = birthDate.slice(0, 4)
    const birthMonth = birthDate.slice(5,7)

    monthsByYear = (todayYear - birthYear) * 12
    monthsByYearAdjust = monthsByYear - birthMonth
    monthAge = monthsByYearAdjust + parseInt(todayMonth)
    percentage = monthAge / 10
   
    let p = document.createElement('p')
    p.textContent = "You have lived " + monthAge + " months. That is " + percentage + "% of your 1000 months here on Earth." 
    document.querySelector('#myInfo').appendChild(p)

 }

 async function fetchData() {
    const response = await fetch('/db.json');
    const lifeExpt = await response.json();
    return lifeExpt
  }

  fetchData().then(lifeExpt => {
    const data = lifeExpt.data.splice(0,51)

    data.map(datum => {
        const averageMonths = Math.ceil(datum[10] * 12) 
        const state = datum[8]

        const ul = document.querySelector('#specDatum')
        const li = document.createElement('li')
        li.textContent = state + ":   " + averageMonths + " months"
        ul.append(li)
    })
})

//functions for activities and montly plan

 getActivity()
 activity()

 function getActivity(){
    fetch('http://www.boredapi.com/api/activity/')
    .then(response => response.json())
    .then(data => activity(data))
 }

 function activity(acts){
    const actArray = Object.values(acts);
    acts = actArray[0]
    let p = document.createElement('p')
    p.textContent = "Dare to do something different. How about this: " + acts + '!' 
    document.querySelector('#activity').appendChild(p)
    }

 function myMsg(message){
    message = monthPlan.value
    let p = document.createElement('li')
    p.textContent = message 
    document.querySelector('#plans').appendChild(p)
 }