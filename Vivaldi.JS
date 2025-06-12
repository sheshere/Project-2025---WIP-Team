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