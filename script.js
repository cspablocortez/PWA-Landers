const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const timezone = document.getElementById('timezone');
const ampm = document.getElementById('ampm')

// 1. Create a function called 'setTime()' and we will make it figure out the current time and put it on screen
function setTime() {
    const now = new Date();
    const formatTime = (time) => (time < 10) ? `0${time}` : time; 

    hours.textContent = formatTime(now.getHours() % 12);
    minutes.textContent = formatTime(now.getMinutes());
    seconds.textContent = formatTime(now.getSeconds());
    ampm.textContent = now.getHours() < 12 ? 'AM' : 'PM';
    const options = {
        day: '2-digit',
        timeZoneName: "long"
    };
    timezone.textContent = now.toLocaleDateString(undefined, options).substring(4);
}

// 2. Call this function every 1000 milliseconds
setTime();
setInterval(setTime, 1000);