let text = prompt("input string");
let s = text.toLowerCase();
let position = s.includes("spam");
document.write("<p id='text'>" + text + "/<p>");
if (position == true) {
  document.write(position);
  document.getElementById("text").innerHTML = s.replace("spam", "****");
}
