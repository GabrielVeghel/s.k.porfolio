const button = document.getElementById("aboutMe");
const text = document.getElementById("myText");

button.addEventListener("click", function() {
    if (text.style.display === "none") {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
});