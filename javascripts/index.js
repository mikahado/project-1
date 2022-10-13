document.addEventListener("DOMContentLoaded", () => {

    //GRAB INFO FROM ACTIVITY API
    fetch('http://www.boredapi.com/api/activity/')
    .then(response => response.json())
    .then(data1 => activity(data1))
     
    
    //GRAB INFO FROM CDC DATABASE
    fetch('/db.json')
    .then(response => response.json())
    .then(data2 => lifeExpt(data2))
    
    }) 
    //END OF DOM 
    
    
    //AGE-IN-MONTHS FEATURE
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
    
        let monthsByYear = (todayYear - birthYear) * 12
        let monthsByYearAdjust = monthsByYear - birthMonth
        let monthAge = monthsByYearAdjust + parseInt(todayMonth)
    
        let percentage = monthAge / 10
    
        let p = document.createElement('p')
        p.textContent = `You have lived  ${monthAge} months. That is ${percentage}% of your 1000 months here on Earth.` 
        document.querySelector('#myInfo').appendChild(p)
        
    }
    
    //GET IT DONE FEATURE
    
    let msg = document.getElementById('comments')
    
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
    
     //SHAKE IT UP FEATURE
    
     function activity(act){
        const actArray = Object.values(act);
        act = actArray[0]
    
        let p = document.createElement('p')
        p.textContent = "Dare to do something different. How about this: " + act + '!' 
        document.querySelector('#activity').appendChild(p)
        }

    //LIFE EXP FROM API NEEDS WORK!!
    
    function lifeExpt(dataLife) {

        for (item in dataLife){
            const allItems = dataLife[item]
            for (select in allItems){
                const state = allItems[select][8]
                const months = allItems[select][10]*12
                const monthsRounded = Math.ceil(months)

                // const lifeObj = allItems[select][8] + " : " + allItems[select][10]*12

                const ul = document.querySelector('#specDatum')
                const li = document.createElement('li')
                li.textContent = `${state}: ${monthsRounded} months`
                ul.append(li)
            }
        }     
    }
      
    
    //CSS MODE CHANGE
    
    let darkMode = localStorage.getItem('darkMode')
    let darkModeToggle = document.querySelector('#dark-mode-toggle');
    
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