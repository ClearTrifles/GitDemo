// main.js

// Function to change the content of the paragraph
function changeContent() {
    document.getElementById("demo").innerHTML = "Hello, World!";
}

// Event listener for button click
document.getElementById("myButton").addEventListener("click", changeContent);