let baseUrl = 'https://worldtimeapi.org/api/timezone'

let timeZones = {
    india: 'Asia/Kolkata',
    usa: 'America/Toronto',
    canada: 'America/Toronto',
    china: 'Asia/Ho_Chi_Minh',
    russia: 'Asia/Yakutsk',
    sriLanka: 'Asia/Kolkata',
    paris: 'Europe/Paris',
    france: 'Europe/Paris',
    johannesburg: 'Africa/Johannesburg',
    adelaide: 'Australia/Adelaide',
    melbourne:'Australia/Melbourne',
    sydney: 'Australia/Sydney',
    newYork: 'America/New_York'
}

let chosenTimeZome = timeZones.india;

// setInterval(() => {    
//     const requestedTime = fetch(`${baseUrl}/${chosenTimeZome}`)
//     console.log(requestedTime)
//     requestedTime
//         .then((data) => { 
//             data.json()
//                 .then((normalData) => {
//                     document.getElementById('time').innerText = normalData.datetime.slice(11).substr(0, 8)
//                 })
//         })
// }, 1000)

// async await

setInterval(async () => {    
    const requestedTime = await fetch(`${baseUrl}/${chosenTimeZome}`) 
    const parsedData = await requestedTime.json()
    document.getElementById('time').innerText = parsedData.datetime.slice(11).substr(0, 8)
}, 1000)

const buttons = document.getElementsByClassName('ourButton')

console.log(buttons)

for(let i=0; i<buttons.length; i++) {
    buttons[i].addEventListener('click', (e) => {
        // e = event ki properties
        // e.target = us button ki properties jisse event hua hai
        console.log(chosenTimeZome)
        console.log(e.target.id)
        console.log(timeZones[e.target.id])
        chosenTimeZome = timeZones[e.target.id]
    })
}


// const selector = document.querySelector('#selector')

// selector.addEventListener('change', (e) => {
//     chosenTimeZome = timeZones[e.target.value]
// })