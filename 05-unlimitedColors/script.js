const randomColor = function(){
    const hexa = '0123456789ABCDEF'
    let color = '#'
    for(let i = 0; i < 6; i++){
        color += hexa[Math.floor(Math.random()*16)]
    }
    return color
}
// console.log(randomColor());

let intervalId;
const startChangingColor = function(){
    if(!intervalId){
        intervalId = setInterval(changeBgColor, 1500)
    }
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor()
    }
}
document.querySelector('#start').addEventListener('click', startChangingColor)

const stopChangingColor = function(){
    clearInterval(intervalId)
    intervalId = null
}
document.querySelector('#stop').addEventListener('click', stopChangingColor)