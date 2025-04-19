import "./style.css";
import { createDropdown } from "./createDropdown";
import { createCircleControls, createArrowButtons, controller } from "./createImageControls";

const dropdown = document.querySelector(".menu");
const button = document.querySelector(".dropdown > img");
const strip = document.querySelector(".strip");
const arrows = document.querySelector(".arrows");
const imageNodes = document.querySelectorAll(".strip img");
const container = document.querySelector(".circles");
const image = document.querySelector(".strip img");

strip.style.left = "0px";
createDropdown(dropdown, button);

createCircleControls(strip, imageNodes, container);

createArrowButtons(arrows, image, strip);

setInterval(() => {
	if (controller.getIndex() === 4) {
		strip.style.left = "0px";
		controller.setIndex(0);
	} else {
		controller.incrementIndex();
		strip.style.left = -controller.getIndex() * image.width + "px";
	}
}, 5000);
window.debug = {
	button,
	dropdown,
	strip,
	controller,
};
