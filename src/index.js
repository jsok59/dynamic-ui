import "./style.css";
import { createDropdown } from "./createDropdown";
import { createCircleControls, createArrowButtons, controller } from "./createImageControls";

const dropdown = document.querySelector(".menu");
const button = document.querySelector(".dropdown > img");
const strip = document.querySelector(".strip");
const arrows = document.querySelector(".arrows");
strip.style.left = "0px";
createDropdown(dropdown, button);

createCircleControls(strip);

createArrowButtons(arrows);

window.debug = {
	button,
	dropdown,
	strip,
	controller,
};
