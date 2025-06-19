const stylesheet = document.getElementById("my-stylesheet");
stylesheet.onload = () =>
    stylesheet.onerror = () => {
        console.log("An error occurred loading the stylesheet!");
    };

const myHeading = document.querySelector("h1");
// Update the text content of the <h1>
myHeading.textContent = "WEE-weee-weee!";

const myImage = document.querySelector("img");
myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/seasons.jpg") {
    myImage.setAttribute("src", "images/winter.jpg");
  } else {
    myImage.setAttribute("src", "images/seasons.jpg");
  }
})

function loadSeason(season) {
  const titles = {
    spring: "Vivaldi's Spring",
    summer: "Vivaldi's Summer",
    autumn: "Vivaldi's Autumn",
    winter: "Vivaldi's Winter"
  };

  const descriptions = {
    spring: "Enjoy the music of blooming Spring.",
    summer: "Relax with the heat of Summer.",
    autumn: "Feel the change in Vivaldi's Autumn.",
    winter: "Chill with the crisp sounds of Winter."
  };

  const audioFiles = {
    spring: "sounds/4seasons/1. Spring 1(allegro).mp3",
    summer: "sounds/4seasons/2. Summer 1 (presto).mp3",
    autumn: "sounds/4seasons/3. Autumn 1 (allegro).mp3",
    winter: "sounds/4seasons/4. Winter 1 (allegro non molto).mp3"
  };

  // Update title and description
  document.getElementById('main-title').textContent = titles[season];
  document.getElementById('season-description').textContent = descriptions[season];

  // Update audio
  const audioSource = document.getElementById('audio-source');
  const audioPlayer = document.getElementById('audio-player');
  audioSource.src = audioFiles[season];
  audioPlayer.load();
  audioPlayer.play();

  // Show season content
  document.getElementById('season-buttons').classList.add('hidden');
  document.getElementById('season-content').classList.remove('hidden');

  // Change background color (optional)
  document.body.style.backgroundColor = {
    spring: "#e0ffe0",
    summer: "#fff7b2",
    autumn: "#ffe4b5",
    winter: "#e0f7fa"
  }[season];
}

function goBack() {
  // Stop and reset audio
  const audioPlayer = document.getElementById('audio-player');
  audioPlayer.pause();
  audioPlayer.currentTime = 0;

  // Reset title
  document.getElementById('main-title').textContent = "Choose a Season";

  // Toggle visibility
  document.getElementById('season-content').classList.add('hidden');
  document.getElementById('season-buttons').classList.remove('hidden');

  // Reset background color
  document.body.style.backgroundColor = "#f0f0f0";
}
