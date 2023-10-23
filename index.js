document.addEventListener('DOMContentLoaded', function() {

//header 
const header=document.createElement('header');
header.classList.add('header');
const h1=document.createElement('h1');
h1.textContent='Etch-a-Sketch';
header.appendChild(h1);
//header styles
header.style.position="static";
header.style.bottom="0";
header.style.left="0";
header.style.width="100%";
header.style.paddingBottom="1px";
header.style.paddingTop="1px";
header.style.marginBottom="10px";
header.style.background="rgba(83, 1, 46, 0.9)";
//h1 styles
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
newDiv.style.border="4px solid black";
newDiv.style.width="600px";
newDiv.style.height="430px";
newDiv.style.position = "absolute";
newDiv.style.top = "50%";
newDiv.style.left = "50%";
newDiv.style.transform = "translate(-50%, -50%)";
newDiv.style.marginTop = "5px";
newDiv.style.borderRadius="15px";
newDiv.style.borderColor="rgba(83, 1, 46, 0.9)";


  

//const iconStyle = "font-size: 24px; margin-right: 8px;";

const button1 = document.createElement('button'); 
button1.innerHTML = '<i class="fas fa-redo"></i> RESET';
//button1.textContent = 'RESET';
button1.classList.add('icon-button');
button1.style.color = 'rgba(83, 1, 46, 0.9)';
button1.style.backgroundColor = 'white';
button1.style.marginLeft = '180px';
button1.style.width = '100px';
button1.style.height = '40px';
button1.style.borderRadius = '45px';
button1.style.fontFamily="Roboto, sans-serif";
button1.style.boxShadow = "0px 5px 10px";
button1.style.display="flex";
button1.style.justifyContent="center";
button1.style.flexDirection="column";
button1.style.paddingTop="1px";
button1.style.marginTop="120px";
button1.style.alignItems = "center"; 

const button2 = document.createElement('button'); 
button2.innerHTML = '<i class="fas fa-random"></i> RANDOM';
//button2.textContent = 'RANDOM';
button2.style.color = 'rgba(83, 1, 46, 0.9)';
button2.style.backgroundColor = 'white';
button2.style.marginLeft = '180px';
button2.style.width = '100px';
button2.style.height = '40px';
button2.style.borderRadius = '45px';
button2.style.fontFamily="Roboto, sans-serif";
button2.style.boxShadow = "0px 5px 10px";
button2.style.display="flex";
button2.style.justifyContent="center";
button2.style.flexDirection="column";
button2.style.paddingTop="1px";
button2.style.marginTop="10px";
button2.style.alignItems = "center"; 

const button3 = document.createElement('button'); 
button3.innerHTML = '<i class="fas fa-paint-brush"></i> BLACK';
//button3.textContent = 'BLACK';
button3.style.color = 'rgba(83, 1, 46, 0.9)';
button3.style.backgroundColor = 'white';
button3.style.marginLeft = '180px';
button3.style.width = '100px';
button3.style.height = '40px';
button3.style.borderRadius = '45px';
button3.style.fontFamily="Roboto, sans-serif";
button3.style.boxShadow = "0px 5px 10px";
button3.style.display="flex";
button3.style.justifyContent="center";
button3.style.flexDirection="column";
button3.style.paddingTop="1px";
button3.style.marginTop="10px";
button3.style.alignItems = "center"; 

const button4 = document.createElement('button'); 
button4.innerHTML = '<i class="fas fa-cogs"></i> SET SIZE';
//button4.textContent = 'SET SIZE';
button4.style.color = 'rgba(83, 1, 46, 0.9)';
button4.style.backgroundColor = 'white';
button4.style.marginLeft = '180px';
button4.style.width = '100px';
button4.style.height = '40px';
button4.style.borderRadius = '45px';
button4.style.fontFamily="Roboto, sans-serif";
button4.style.boxShadow = "0px 5px 10px";
button4.style.display="flex";
button4.style.justifyContent="center";
button4.style.flexDirection="column";
button4.style.paddingTop="1px";
button4.style.marginTop="10px";
button4.style.alignItems = "center"; 

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
footer.style.paddingTop="25px";
footer.style.paddingBottom="25px";
footer.style.background="rgba(83, 1, 46, 0.9)";
footer.style.color="#fff";
footer.style.fontFamily="Copperplate,sans-serif";

// Append elements to the body
document.body.appendChild(header);
document.body.appendChild(body);
document.body.appendChild(newDiv);
document.body.appendChild(button1);
document.body.appendChild(button2);
document.body.appendChild(button3);
document.body.appendChild(button4);
document.body.appendChild(footer);
});