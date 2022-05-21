const { default: axios } = require('axios');
const express = require('express')
const cors = require('cors')

    const API_BASE_URL = 'http://fortunecookieapi.com/v1/fortunes/'



// const response = axios.get(`${API_BASE_URL}/1`).then((res) => console.log(res.data)); 


const app = express(); 
app.use(express.json());
app.use(cors())

app.get('/api/test', async (req, res) => {
    const response = await axios.get(`${API_BASE_URL}`)

    console.log('hit the endpoint')
    res.status(200).send(response.data)
    
});  



app.get('/api/test/:banana', (req, res) => {
    console.log('got param!', req.params)
    res.sendStatus(200)
});  


app.listen(4040, () => console.log('server running on 4040'));


