const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const timezone = document.getElementById('timezone');
const ampm = document.getElementById('ampm')

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

setTime();
setInterval(setTime, 1000);