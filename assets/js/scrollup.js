// Up Button
var upBtn = document.querySelector(".button-up"),
	scrollUp = document.querySelector('[data-role="scroll-up"]');

window.onscroll = () => {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		upBtn.style.visibility = "visible";
	} else {
		upBtn.style.visibility = "hidden";
	}
};

scrollUp.addEventListener("click", function () {
	smoothScroll("#header", 1500);
});

function smoothScroll(target, duration) {
	var target = document.querySelector(target);
	var targetPosition = target.getBoundingClientRect().top;
	var startPosition = window.pageYOffset;
	var distance = targetPosition - startPosition;
	var startTime = null;

	function animation(currentTime) {
		if (startTime === null) startTime = currentTime;
		var timeElapsed = currentTime - startTime;
		var run = ease(timeElapsed, startPosition, distance, duration);
		window.scrollTo(0, run);
		if (timeElapsed < duration) requestAnimationFrame(animation);
	}

	function ease(t, b, c, d) {
		t /= d / 2;
		if (t < 1) return (c / 2) * t * t + b;
		t--;
		return (-c / 2) * (t * (t - 2) - 1) + b;
	}

	requestAnimationFrame(animation);
}
