let komodoShip = {
    name: "Komodo",
    velocity: 80,
    acceleration: 0
}

const velocityAfter2Seconds = (velocity, acceleration) => {
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            if(acceleration > 0) {
                velocity += acceleration * 2
                console.log(`New velocity: ${velocity}`)
                resolve(velocity)
            } else {
                console.log("Invalid acceleration")
                reject("Has no acceleration")
            }
        }, 1000)
    })
}

velocityAfter2Seconds(komodoShip.velocity, komodoShip.acceleration).then(velocity => {
    komodoShip.velocity = velocity
    console.log("After accelerating:\n", komodoShip)
}).catch(message => {
    console.log(`Komodo: ${message}`)
})

console.log("Execution of Promises")
console.log(komodoShip)