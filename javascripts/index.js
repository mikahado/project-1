document.addEventListener("DOMContentLoaded", () => {

let form = document.querySelector('form') 
let msg = document.getElementById('comments')
let darkMode = localStorage.getItem('darkMode')

form.addEventListener('submit', (e) => { 
e.preventDefault(); 
monthCalc(e.target.todayDate.value, e.target.birthDate.value) 
})

msg.addEventListener('submit', (e) => { 
e.preventDefault(); 
myMsg(e.target.monthPlan.value) 
msg.reset()
    })


const darkModeToggle = document.querySelector('#dark-mode-toggle');

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
    } else {
       disableDarkMode();
   }
})

})
   
getActivity()
fetchLifeExpt()
async function fetchLifeExpt() {
            fetch('/db.json')
            .then(response => response.json())
            .then(data2 => lifeExpt(data2))
          }
    
    function lifeExpt(entries) {
        entries.splice(0,51).map(datum => {
                
            const averageMonths = Math.ceil(datum[10] * 12) 
            const state = datum[8]
            const fakeObject = state + ": " + averageMonths + " months."
     
            const ul = document.querySelector('#specDatum')
            const li = document.createElement('li')
            li.textContent = fakeObject
            ul.append(li)
                }     
            )}

    
function getActivity(){
    fetch('http://www.boredapi.com/api/activity/')
    .then(response => response.json())
    .then(data => activity(data))
 }

function activity(act){
    const actArray = Object.values(act);
    act = actArray[0]
    let p = document.createElement('p')
    p.textContent = "Dare to do something different. How about this: " + act + '!' 
    document.querySelector('#activity').appendChild(p)
    }

function monthCalc(todayDate, birthDate){

    const todayYear = todayDate.slice(0, 4)
    const todayMonth = todayDate.slice(5, 7)
    const birthYear = birthDate.slice(0, 4)
    const birthMonth = birthDate.slice(5,7)

    let monthsByYear = (todayYear - birthYear) * 12
    let monthsByYearAdjust = monthsByYear - birthMonth
    let monthAge = monthsByYearAdjust + parseInt(todayMonth)

    let percentage = monthAge / 10

    let p = document.createElement('p')
    p.textContent = `You have lived  ${monthAge} months. That is ${percentage}% of your 1000 months here on Earth.` 
    document.querySelector('#myInfo').appendChild(p)
}

function myMsg(message){
    const message = monthPlan.value
    let p = document.createElement('li')
    p.textContent = message 
    document.querySelector('#plans').appendChild(p)
 }
