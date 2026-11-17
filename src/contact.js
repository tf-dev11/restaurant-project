export default loadContact;



function loadContact(){



const contactDiv = document.createElement('div')

contactDiv.classList.add('contact-info')



const info = document.createElement('h1');

info.textContent = " passive stack: 125-111-111 " ;

contactDiv.appendChild(info);


return contactDiv







};