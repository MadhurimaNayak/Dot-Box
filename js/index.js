let playersCount = document.querySelector("#players-count");
let startBtn = document.querySelector("#start-btn");
let selectedTheme = 1;
let selectedDifficulty = "Easy";

startBtn.addEventListener("click", function () {
	localStorage.setItem("playersCount", playersCount.value);
	localStorage.setItem("selectedTheme", selectedTheme);
	localStorage.setItem("selectedDifficulty", selectedDifficulty);
});
document.addEventListener("DOMContentLoaded", function () {
	// Add event listener for the reset button
	var resetButton = document.getElementById("reset-btn");

	resetButton.addEventListener("click", function () {
		// Reset form inputs
		document.getElementById("players-count").value = 2; // Reset players count input to default value

		// Additional reset logic as needed for your game

		// Optional: You can also reset game state variables or clear any game-related data structures here
	});
});

const menu = document.querySelector(".nav-links");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
	if (menu.style.display === "none" || menu.style.display === "") {
		menu.style.display = "flex";
	} else {
		menu.style.display = "none";
	}
});

// Themes for the game

const video = document.getElementById("myVideo");
const themeSelect = document.getElementById("theme-select");

themeSelect.addEventListener("change", () => {
	selectedTheme = themeSelect.value;
	video.src = `/assets/videos/${selectedTheme}.mp4`; // Update video source based on theme
});

const difficulty = document.querySelectorAll(".d-type");

difficulty.forEach((item) => {
	item.addEventListener("click", () => {
		selectedDifficulty = item.innerText;
		difficulty.forEach((diff) => {
			diff.classList.remove("active");
		});
		item.classList.add("active");
	});
});
