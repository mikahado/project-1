document.addEventListener("DOMContentLoaded", () => {

    fetch('http://www.boredapi.com/api/activity/')
    .then(response => response.json())
    .then(activityApi => activity(activityApi))
     
    fetch('http://localhost:3000/data')
    .then(response => response.json())
    .then(cdcData => cdcData.map(allData => 
        lifeExpt(allData)  
        )
    )
}) 
    
    let form = document.querySelector('form') 
    
    form.addEventListener('submit', (e) => { 
         e.preventDefault(); 
         monthCalc(e.target.todayDate.value, e.target.birthDate.value) 
         })
    
    function monthCalc(todayDate, birthDate){
       
        const todayYear = todayDate.slice(0, 4)
        const todayMonth = todayDate.slice(5, 7)
        const birthYear = birthDate.slice(0, 4)
        const birthMonth = birthDate.slice(5,7)

        const monthAge = ((todayYear - birthYear) * 12) - (birthMonth) + (parseInt(todayMonth))
        const percentage = monthAge / 10
    
        let p = document.createElement('p')
        p.textContent = `You have lived  ${monthAge} months. That is ${percentage}% of your 1000 months here on Earth.` 
        document.querySelector('#myInfo').append(p)
        
    }
    
    const msg = document.getElementById('comments')
    
    msg.addEventListener('submit', (e) => { 
        e.preventDefault(); 
        getItDone(e.target.monthPlan.value) 
        msg.reset()
            })
    
    function getItDone(message){
        message = monthPlan.value
        let p = document.createElement('li')
        p.textContent = message 
        document.querySelector('#plans').appendChild(p)
     }

     function activity(act){
        const activity = act.activity
    
        let p = document.createElement('p')
        p.textContent = "Dare to do something different. How about this: " + activity + '!' 
        document.querySelector('#activity').appendChild(p)
        }
    
    function lifeExpt(dataLife) {

        const stateData = dataLife.state
        const monthData = Math.floor(dataLife.total * 12)
  
        //TODO
        //create a dropdown menu with all the states. 
        //if selection value equals a state
        //append the state and month Data to Dom

        const ul = document.querySelector('#specDatum')
        const li = document.createElement('li')
        li.textContent = `${stateData}: ${monthData} months`
        ul.append(li)
   
    }
    
    const darkMode = localStorage.getItem('darkMode')
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
       let darkMode = localStorage.getItem('darkMode') 
       if (darkMode !== "enabled") {
           enableDarkMode();
        } else {
           disableDarkMode();
       }
    })

    // Below is the code challege for my project assessment: 

    // const commentForm = document.querySelector("#user-comments-form")
    // // const commentsSubmit = document.getElementById("user-comments-submit")
    // const commentText = document.getElementById("user-comments-input")
    // console.log(commentText)

    // commentForm.addEventListener('submit', (e) => {
    //     e.preventDefault()
    //     addComment(commentText.value)
    // })

    // function addComment(text){
    //     // text = commentsSubmit.value
    //     let p = document.createElement("p")
    //     console.log(p)
    //     p.textContent = text 
    //     console.log(p.textContent)
    //     document.querySelector('#user-comments-div').append(text)
    //    }
