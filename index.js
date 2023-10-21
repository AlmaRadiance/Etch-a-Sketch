document.addEventListener('DOMContentLoaded', function() {

//header
const header=document.createElement('header');
header.classList.add('header');
const h1=document.createElement('h1');
h1.textContent='Etch-a-Sketch';
header.appendChild(h1);
header.style.position="static";
header.style.bottom="0";
header.style.left="0";
header.style.width="100%";
header.style.padding="10px";
header.style.marginBottom="20px";
header.style.background="rgba(83, 1, 46, 0.9)";

h1.style.color="white";
h1.style.fontFamily="Copperplate, sans-serif";
h1.style.display="block";
h1.style.fontSize="32px";
h1.style.padding="10px";
h1.style.textAlign="center";
h1.style.margin="10px";

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
footer.style.position="fixed";
footer.style.bottom="0";
footer.style.left="0";
footer.style.width="100%";
footer.style.textAlign="center";
footer.style.padding="1rem";
footer.style.paddingBottom="1px";
footer.style.background="rgba(83, 1, 46, 0.9)";
footer.style.color="#fff";
footer.style.fontFamily="Copperplate,sans-serif";

// Append elements to the body
document.body.appendChild(header);
document.body.appendChild(body);
document.body.appendChild(newDiv);
document.body.appendChild(footer);
});