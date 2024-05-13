let a = [
    "Initializing Hack tool...",
    "Connecting to Facebook...",
    "Connecting to server 1...",
    "Connection failed! Retrying...",
    "Connecting to server 2...",
    "Connected Sucessfully...",
    "username Hrittik1920",
    "Trying brute force...",
    "200k password tried...",
    "Match not found...",
    "Another 200k password tried...",
    "Match not found...",
    "Another 200k password tried...",
    "Match not found...",
    "Another 200k password tried...",
    "Match found...",
    "Accessing Account...",
    "Hack Successful"
]

const sleep = async (second) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => { resolve(true)},second * 1000)
    })
}

const showHack = async (messages) => {
    await sleep(2)
    text.innerHTML += messages + "<br>"
} 

(async () => {
    for(let i=0;i<a.length;i++) {
        await showHack(a[i])
    }
})()