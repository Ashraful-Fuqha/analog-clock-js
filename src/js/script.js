const handHour = document.querySelector('.hand-hour')
const handSecond = document.querySelector('.hand-second')
const handMinute = document.querySelector('.hand-minute')

function setDate(){
    const now = new Date();

    const seconds = now.getSeconds();
    const secondDegrees = ((seconds/60)*360)+90;
    handSecond.style.transform = `rotate(${secondDegrees}deg)`

    const minutes = now.getMinutes();
    const minuteDegrees = ((minutes/60)*360)+ ((seconds/60)*6)+90;
    handMinute.style.transform = `rotate(${minuteDegrees}deg)`

    const hours = now.getHours();
    const hoursDegrees = ((hours/12)*360)+ ((minutes/60)*30)+90;
    handHour.style.transform = `rotate(${hoursDegrees}deg)`
}

setInterval(setDate,1000);

setDate();