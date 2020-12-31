const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const xmasEve = `25 Dec 2021`;

function countDown() {
	const xmasEveDate = new Date(xmasEve);
	const currentDate = new Date();

	const totalSec = Math.floor(xmasEveDate - currentDate) / 1000;

	const days = Math.floor(totalSec / 3600 / 24);
	const hours = Math.floor((totalSec / 3600) % 24);
	const minutes = Math.floor((totalSec / 60) % 60);
	const seconds = Math.floor(totalSec) % 60;

	daysEl.innerHTML = days;
	hoursEl.innerHTML = formatTime(hours);
	minutesEl.innerHTML = formatTime(minutes);
	secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
	return time < 10 ? `0${time}` : time;
}

countDown();

setInterval(countDown, 1000);
