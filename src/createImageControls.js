import circleImg from "./images/circle-outline.svg";
import leftArrow from "./images/arrow-left-bold.svg";
import rightArrow from "./images/arrow-right-bold.svg";

function createCircleControls(strip, imageNodes, container) {
	console.log(circleImg);
	let counter = 0;
	for (const image of imageNodes) {
		const circle = document.createElement("img");
		circle.src = circleImg;
		circle.counter = counter;
		circle.addEventListener("click", () => {
			strip.style.left = -circle.counter * image.width + "px";
			controller.setIndex(circle.counter);
		});
		container.appendChild(circle);
		counter++;
	}
}

function createArrowButtons(arrows, image, strip) {
	const length = document.querySelectorAll(".strip img").length;
	const leftarrow = document.createElement("img");
	leftarrow.src = leftArrow;
	leftarrow.addEventListener("click", () => {
		if (controller.getIndex() > 0) {
			strip.style.left = parseInt(strip.style.left) + image.width + "px";
			controller.decrementIndex();
		} else {
			controller.setIndex(length - 1);
			strip.style.left = -controller.getIndex() * image.width + "px";
		}
	});

	const rightarrow = document.createElement("img");
	rightarrow.src = rightArrow;
	rightarrow.addEventListener("click", () => {
		if (controller.getIndex() < length - 1) {
			strip.style.left = parseInt(strip.style.left) - image.width + "px";
			controller.incrementIndex();
		} else {
			controller.setIndex(0);
			strip.style.left = -controller.getIndex() * image.width + "px";
		}
	});

	arrows.appendChild(leftarrow);
	arrows.appendChild(rightarrow);
}

const controller = (function () {
	let currentIndex = 0;
	const getIndex = () => currentIndex;
	const incrementIndex = () => currentIndex++;
	const decrementIndex = () => currentIndex--;
	const setIndex = (index) => (currentIndex = index);

	return { getIndex, incrementIndex, decrementIndex, setIndex };
})();

export { createCircleControls, createArrowButtons, controller };
