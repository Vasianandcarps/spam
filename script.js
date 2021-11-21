let text = prompt("input string");
let s = text.toLowerCase();
let position = s.indexOf("spam");
document.write("<p id='text'>" + text + "/<p>");
if (position > 0) {
  document.write("true");
  document.getElementById("text").innerHTML = s.replace("spam", "****");
}
