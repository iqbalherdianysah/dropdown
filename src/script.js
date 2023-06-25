const btnClick = document.getElementById("btnClick");
const navItems = document.getElementById("nav-items");

let isActive = false;

btnClick.addEventListener("click", () => {
	isActive = !isActive;

	if (isActive) {
		navItems.classList.replace("h-[0px]", "h-[100px]");
		navItems.classList.replace("py-0", "py-2");
		btnClick.classList.replace("bg-transparent", "bg-white");
	} else {
		navItems.classList.replace("h-[100px]", "h-[0px]");
		navItems.classList.replace("py-2", "py-0");
		btnClick.classList.replace("bg-white", "bg-transparent");
	}
});
