import loadContact from "./contact.js";
import loadHome from "./home.js";
import loadMenu from "./menu.js";

const container = document.getElementById('content');
container.appendChild(loadHome());


const menuBtn = document.getElementById('Menu');
const homeBtn = document.getElementById('Home');
const contactBtn = document.getElementById('Contact');


menuBtn.addEventListener('click' , () => {

container.innerHTML = ''
container.appendChild(loadMenu()) ;

});

homeBtn.addEventListener('click', ()=>{
    container.innerHTML = '';
    container.appendChild(loadHome());

});

contactBtn.addEventListener('click', () => {

container.innerHTML = '';
container.appendChild(loadContact());





});
