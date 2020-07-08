const fetch = require('node-fetch')
const dataExample = ['6548161','6548258'] 
for(const data of dataExample){
    fetch('https://protele.arsipsehat.com/partner/booking/get', {
            method: 'post',
            body:    JSON.stringify({id : data}),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(res => res.json())
        .then(json => console.log(json));
}