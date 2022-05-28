const { default: axios } = require('axios');
const express = require('express')
const cors = require('cors');
const { response } = require('express');



const app = express(); 
app.use(express.json());
app.use(cors())



app.post('/test', (req, res) => {
    
    let newDay = req.body.daySelect
    let newMonth = req.body.monthSelect
    

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
   
    res.send(`You have selected ${newMonth} ${newDay}. This is your reading: 
    
                ${quote}`)
    
});  

app.get('/api/dailyquote', (req, res) => {
    
    axios.get('https://zenquotes.io/api/today/').then (resp => {
       
    res.send(resp.data)
})}); 





app.listen(4040, () => console.log('server running on 4040'));


