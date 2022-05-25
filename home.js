//Create references to the dropdown's
const yearSelect = document.getElementById("year");
const monthSelect = document.getElementById("month");
const daySelect = document.getElementById("day");

const months = ['January', 'February', 'March', 'April', 
'May', 'June', 'July', 'August', 'September', 'October',
'November', 'December'];



//Months are always the same
(function populateMonths(){
    for(let i = 0; i < months.length; i++){
        const option = document.createElement('option');
        option.textContent = months[i];
        monthSelect.appendChild(option);
    }
    monthSelect.value = "January";
})();

let previousDay;

function populateDays(month){
    //Delete all of the children of the day dropdown
    //if they do exist
    while(daySelect.firstChild){
        daySelect.removeChild(daySelect.firstChild);
    }
    //Holds the number of days in the month
    let dayNum;
    //Get the current year
    let year = yearSelect.value;

    if(month === 'January' || month === 'March' || 
    month === 'May' || month === 'July' || month === 'August' 
    || month === 'October' || month === 'December') {
        dayNum = 31;
    } else if(month === 'April' || month === 'June' 
    || month === 'September' || month === 'November') {
        dayNum = 30;
    }else{
        //Check for a leap year
        if(new Date(year, 1, 29).getMonth() === 1){
            dayNum = 29;
        }else{
            dayNum = 28;
        }
    }
    //Insert the correct days into the day <select>
    for(let i = 1; i <= dayNum; i++){
        const option = document.createElement("option");
        option.textContent = i;
        daySelect.appendChild(option);
    }
    if(previousDay){
        daySelect.value = previousDay;
        if(daySelect.value === ""){
            daySelect.value = previousDay - 1;
        }
        if(daySelect.value === ""){
            daySelect.value = previousDay - 2;
        }
        if(daySelect.value === ""){
            daySelect.value = previousDay - 3;
        }
    }
}

function populateYears(){
    //Get the current year as a number
    let year = new Date().getFullYear();
    //Make the previous 100 years be an option
    for(let i = 0; i < 101; i++){
        const option = document.createElement("option");
        option.textContent = year - i;
        yearSelect.appendChild(option);
    }
}

populateDays(monthSelect.value);
populateYears();

yearSelect.onchange = function() {
    populateDays(monthSelect.value);
}
monthSelect.onchange = function() {
    populateDays(monthSelect.value);
}
daySelect.onchange = function() {
    previousDay = daySelect.value;
}

//submit button//

    
const button1 = document.getElementById("button1");

button1.addEventListener("click", e => {
    let quotes = [  'If you feel hemmed in by fears or uncertainties in your love life, the day ahead will give you the courage to challenge your obstacles',
                    'This is a good time to clean out your closet and throw away things you no longer need. Be ruthless.',
                    'Time to start making some major career moves when the sun enters Gemini', 
                    'If you’re in love, let everyone know it when Mercury in Gemini sextiles Jupiter in Aries',
                    'You’ve always prided yourself on your moral code, but you could be wrong about something important', 
                    'Don’t be afraid to get off your high horse in order to grow',
                    'Other people might have a hard time navigating through the day, thanks to the intensity and corruption thats likely to surface. You have nothing to worry about',
                    'You can be a master manifester this month. The Taurus sun shines brightly in the sector of your chart that governs spirituality. Use it',
                    'You will be surrounded by people telling you something you are not. Listen to yourself']
    let quote = quotes[Math.floor(Math.random()*quotes.length)];
    const dayInput = document.getElementById("day").value 
    let newAlert = daySelect.value[Math.floor(Math.random()*daySelect.value.length)]
    console.log(newAlert)
    alert(quote)
    })
    
    

    // const API_BASE_URL = 'http://fortunecookieapi.com'
    //     // alert(daySelect.value)
    //     const fortune = document.getElementById('fortune'); 
    //     axios.get(`http://private-anon-a4975c3fd5-fortunecookie.apiary-proxy.com/v1/fortunes/%7Bid%7D%7B?%7D`).then((res) => (fortune.innerText = JSON.stringify(res.data))).catch(err=> console.log(err))
    // // alert("submitted")

//grab the dom elements, package those up in the post request that you're going to send to the backend. 
//clear button// 

const button2 = document.getElementById("button2");
    button2.addEventListener("click", e => {
        alert("cleared")
    }
    )

// const API_BASE_URL = 'http://localhost:4040'


// const pokemon = document.getElementById('pokemon'); 
// const response = axios.get(`${API_BASE_URL}/api/test`).then((res) => (pokemon.innerText = JSON.stringify(res.data.base_experience,null, 2))); 
