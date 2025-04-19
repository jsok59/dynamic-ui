import { controller } from "./createImageControls";

function renderFillCircles() {
	const circles = document.querySelectorAll(".circles img");
	for (const circle of circles) {
		if (circle.counter == controller.getIndex()) {
			circle.classList.add("active");
		} else {
			circle.classList.remove("active");
		}
	}
}

export { renderFillCircles };
