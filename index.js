document.addEventListener('DOMContentLoaded', function() {

//header
const header=document.createElement('header');
header.classList.add('header');
const h1=document.createElement('h1');
h1.textContent='Etch-a-Sketch';
header.appendChild(h1);

//Body (Drawing Area)
const body=document.createElement('div');
body.classList.add('body');

const newDiv=document.createElement('div');
newDiv.id="myDiv";
newDiv.style.border="1px solid black";
//newDiv.style.padding="1000px 500px 900px 30px";
//newDiv.style.margin="100px 100px 100px 100px";
newDiv.style.width="900px";
newDiv.style.height="500px";
newDiv.style.position = "absolute";
newDiv.style.top = "50%";
newDiv.style.left = "50%";
newDiv.style.transform = "translate(-50%, -50%)";
newDiv.style.marginTop = "70px";



//footer
const footer=document.createElement('footer');
footer.classList.add('footer');
footer.textContent = '\u00A9 2023 Etch-a-Sketch - The Odin Project | By: Alma P.';

// Append elements to the body
document.body.appendChild(header);
document.body.appendChild(body);
document.body.appendChild(newDiv);
document.body.appendChild(footer);
});