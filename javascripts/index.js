document.addEventListener("DOMContentLoaded", () => {

    fetch('http://www.boredapi.com/api/activity/')
    .then(response => response.json())
    .then(activityApi => activity(activityApi))
     
    fetch('/db.json')
    .then(response => response.json())
    .then(cdcData => lifeExpt(cdcData))  
    
}) 

    //
    //make our Event Listener
    //grab the practice-button id
    //create p tag - createElement
    //insert the text - "Hello world"
    //grab and append it to the div container

    const pButton = document.getElementById('practice-button')
    
    pButton.addEventListener('click', () => {

    const p = document.createElement('p')
    p.textContent = 'Hello world'
    document.getElementById('new-container').append(p)
    }
    )


    // 
    




"practice-button"

    
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
        const actArray = Object.values(act);
        act = actArray[0]
    
        let p = document.createElement('p')
        p.textContent = "Dare to do something different. How about this: " + act + '!' 
        document.querySelector('#activity').appendChild(p)
        }
    
    function lifeExpt(dataLife) {

        //below does not work with new, sanitized database

        for (item in dataLife){
            const allItems = dataLife[item]
            for (select in allItems){
                const state = allItems[select][8]
                const months = allItems[select][10]*12
                const monthsRounded = Math.ceil(months)

                const ul = document.querySelector('#specDatum')
                const li = document.createElement('li')
                li.textContent = `${state}: ${monthsRounded} months`
                ul.append(li)
            }
        }     
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
