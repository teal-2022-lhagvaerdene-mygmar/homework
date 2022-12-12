let div1 = document.getElementById('hello')
div1.innerHTML = '<strong> hello world </strong>';
let div2 = document.getElementsByClassName('hha')
div2[1].innerHTML = '<strong> hello world 1</strong>'
console.log(div2[1])
const newDiv = document.createElement("h1");
const newContent = document.createTextNode("Манай сайтад тавтай морил");
newDiv.appendChild(newContent);
const main = document.getElementsByTagName("h1");
main[1].appendChild(newDiv);