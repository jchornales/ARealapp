var menuBtn = document.querySelector('[data-role="menu-btn"]'),
    menu = document.querySelector('[data-role="menu"]'),
    brand = document.querySelector('[data-role="brand"]'),
    menuOverlay = document.querySelector(".menu-overlay"),
    firstOverlay = document.querySelector('[data-sequence="first"]'),
    secondOverlay = document.querySelector('[data-sequence="second"]'),
    thirdOverlay = document.querySelector('[data-sequence="third"]'),
    signInLink = document.querySelector('[data-link="log-in"]'),
    aboutLink = document.querySelector('[data-link="about"]'),
    ourTeamLink = document.querySelector('[data-link="our-team"]'),
    ourProjectsLink = document.querySelector('[data-link="our-projects"]'),
    aboutScroll = document.querySelector('[data-link="about-app"]'),
    upBtn = document.querySelector(".button-up"),
    signInForm = document.querySelector('[data-role="sign-in"]');

menuBtn.addEventListener("click", () => {
    ToggleMenu();
});

signInLink.addEventListener("click", () => {
    ToggleMenu();
    signInForm.classList.toggle("show-modal");
    upBtn.style.visibility = "hidden";
    document.body.classList.toggle("stop-scroll");
});

aboutLink.addEventListener("click", () => {
    ToggleMenu();
    SmoothScroll(".about-app", 1000, 1000);
});

ourTeamLink.addEventListener("click", () => {
    ToggleMenu();
    SmoothScroll(".our-team", 2000, 1000);
});

ourProjectsLink.addEventListener("click", () => {
    ToggleMenu();
    SmoothScroll(".our-projects", 3000, 1000);
});

aboutScroll.addEventListener("click", () => {
    SmoothScroll(".about-app", 1000, 0);
});

function ToggleMenu() {
    menu.classList.toggle("change");
    menuBtn.classList.toggle("change");
    brand.classList.toggle("change");
    document.body.classList.toggle("stop-scroll");

    if (!menuOverlay.classList.contains("change")) {
        ShowOverlay(firstOverlay, secondOverlay, thirdOverlay);
        upBtn.style.visibility = "hidden";
    } else {
        HideOverlay(thirdOverlay, secondOverlay, firstOverlay);
        upBtn.style.visibility = "show";
    }
}

// Shows Menu Overlay
function ShowOverlay(first, second, third) {
    var delay = 0,
        sequence = [first, second, third];

    sequence.forEach((element) => {
        setTimeout(() => {
            element.classList.add("change");
        }, delay);

        delay += 300;
    });
}

// Hides Menu Overlay
function HideOverlay(first, second, third) {
    var delay = 0,
        sequence = [first, second, third];

    sequence.forEach((element) => {
        setTimeout(() => {
            element.classList.remove("change");
        }, delay);

        delay += 300;
    });
}

function SmoothScroll(target, duration, delay) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    setTimeout(() => {
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
    }, delay);
}