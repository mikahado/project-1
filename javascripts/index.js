document.addEventListener("DOMContentLoaded", () => {

    let form = document.querySelector('form') //seeks 'form' class in html
    let msg = document.getElementById('comments')

    form.addEventListener('submit', (e) => { //readies the submit button, preps event(e) for function 
        e.preventDefault(); //safeguard for something
        buildUserInput(e.target.todayDate.value, e.target.birthDate.value) //function below. 
 
    })

    msg.addEventListener('submit', (e) => { //readies the submit button, preps event(e) for function 
        e.preventDefault(); //safeguard for something
        myMsg(e.target.monthPlan.value) //function below. 
        msg.reset()
    })
})

function buildUserInput(todayDate, birthDate){
    //caculates your age in months, posts it on the DOM
    const todayYear = todayDate.slice(0, 4)
    const todayMonth = todayDate.slice(5, 7)
    const birthYear = birthDate.slice(0, 4)
    const birthMonth = birthDate.slice(5,7)
    // console.log("today year:", todayYear)
    // console.log("today month:", todayMonth)
    // console.log("birth year:", birthYear)
    // console.log("birth month:", birthMonth)

    monthsByYear = (todayYear - birthYear) * 12
    monthsByYearAdjust = monthsByYear - birthMonth + 1
    monthAge = monthsByYearAdjust + parseInt(todayMonth)
    // console.log("months by year:", monthsByYear)
    // console.log("adjust for unlived birth-months:", monthsByYearAdjust)
    // console.log("correct age in months", monthAge)
 
    percentage = monthAge / 10
   
    let p = document.createElement('p')
    p.textContent = "You have lived " + monthAge + " months. You have lived " + percentage + "% of your 1000 months." 
    document.querySelector('#myInfo').appendChild(p)

 }


 getActivity()
 activity()

 function getActivity(){
    fetch('http://www.boredapi.com/api/activity/')
    .then(response => response.json())
    .then(data => activity(data))
 }

 function activity(acts){
    const actArray = Object.values(acts);
    act = actArray[0]
    let p = document.createElement('p')
    p.textContent = "Dare to do something different. How about . . . " + act + '!' 
    document.querySelector('#activity').appendChild(p)
    }



 function myMsg(message){
     //notes to self
    message = monthPlan.value

    let p = document.createElement('li')
    p.textContent = message 
    document.querySelector('#plans').appendChild(p)
 }