const SCROLLTIME = 10000 // 10s. must be same as animation-duration in css, for now. TODO: will be set by user, and only in one place;
const MAX_DELAY = 20000 // max delay in milliseconds // 1800000;

let text;

const glasoStrings = [
	'네가 제일 잘 나가',
	'오늘도 화이팅!!!',
	'눈 정말 예쁜데요..',
	'힘내힘내~'
];

function addScrollingGlaso() {
	// Set delay btw scroll animations
	const minDelay = 0; // Minimum delay in milliseconds
	const randomDelay = Math.random() * (MAX_DELAY - minDelay) + minDelay;
	console.log(randomDelay);
	
	setTimeout(() => {
		text = document.createElement('div');
		document.body.appendChild(text);

		const randomIndex = Math.floor(Math.random() * glasoStrings.length);
		const randomGlaso = glasoStrings[randomIndex];

		const windowHeight = window.innerHeight;
		const randomHeight = Math.random() * windowHeight; // TODO: account for text height

		text.innerText = randomGlaso;
		text.style.top = `${randomHeight}px`;
		text.classList.add('scrolling-glaso');

		setTimeout(() => {
			document.body.removeChild(text);
		}, SCROLLTIME);
	}, SCROLLTIME + randomDelay);
}

function startScrolling() {
	// Initiate motivational tactics
	// TODO: setInterval or similar
	//     addScrollingGlaso();
	console.log('do a thing.');
}

startScrolling();

