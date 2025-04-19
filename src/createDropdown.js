import "./style.css";

function createDropdown(dropdown, button) {
	const rect = button.getBoundingClientRect();
	dropdown.style.top = rect.bottom + "px";
	dropdown.style.left = rect.left + "px";
	dropdown.style.visibility = "hidden";
	button.addEventListener("click", (e) => {
		e.stopPropagation();
		dropdown.style.visibility = "visible";
	});

	document.addEventListener("click", () => {
		dropdown.style.visibility = "hidden";
	});
}

export { createDropdown };
