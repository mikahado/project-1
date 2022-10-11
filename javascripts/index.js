document.addEventListener("DOMContentLoaded", () => {

//event listeners do not need to be here
//put fetch, anything getting the initial data, here. 
//remove comments 

    let form = document.querySelector('form') //seeks 'form' class in html
    let msg = document.getElementById('comments')
    // let drkmode = document.getElementById('button')

    let darkMode = localStorage.getItem('darkMode')
    const darkModeToggle = document.querySelector('#dark-mode-toggle');
    console.log(darkMode)
    
    form.addEventListener('submit', (e) => { 
        e.preventDefault(); 
        monthCalc(e.target.todayDate.value, e.target.birthDate.value) //function below. 
    })

    msg.addEventListener('submit', (e) => { 
    e.preventDefault(); 
        myMsg(e.target.monthPlan.value) //function below. 
        msg.reset()
    })

    // darkmode script

    const enableDarkMode = () => {
     document.body.classList.add('darkmode')
      localStorage.setItem('darkMode', 'enabled')
    }

    const disableDarkMode = () => {
        document.body.classList.remove('darkmode')
        localStorage.setItem('darkMode', 'null')
    }

    darkModeToggle.addEventListener('click', () => { 
    darkMode = localStorage.getItem('darkMode') 
    if (darkMode !== "enabled") {
        enableDarkMode();
        console.log(darkMode)
     } else {
        disableDarkMode();
        console.log(darkMode)
    }
    })

})







function monthCalc(todayDate, birthDate){

    //2022-02-02

    const todayYear = todayDate.slice(0, 4)
    const todayMonth = todayDate.slice(5, 7)
    const birthYear = birthDate.slice(0, 4)
    const birthMonth = birthDate.slice(5,7)

    let monthsByYear = (todayYear - birthYear) * 12
    let monthsByYearAdjust = monthsByYear - birthMonth
    let monthAge = monthsByYearAdjust + parseInt(todayMonth)
    let percentage = monthAge / 10

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
       const fakeObject = state + ": " + averageMonths + " months."
            
       // obj = {}
       // obj[state] = averageMonths
       // console.log(obj)

       const ul = document.querySelector('#specDatum')
       const li = document.createElement('li')
       li.textContent = fakeObject
       ul.append(li)
   })
})

//functions for activities and montly plan

 getActivity()

 function getActivity(){
    fetch('http://www.boredapi.com/api/activity/')
    .then(response => response.json())
    .then(data => activity(data))
 }

 function activity(acts){
    const actArray = Object.values(acts);
    act = actArray[0]
    let p = document.createElement('p')
    p.textContent = "Dare to do something different. How about this: " + act + '!' 
    document.querySelector('#activity').appendChild(p)
    }

 function myMsg(message){
    //work on logic 
    const message = monthPlan.value
    let p = document.createElement('li')
    p.textContent = message 
    document.querySelector('#plans').appendChild(p)
 }