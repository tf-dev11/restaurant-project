

const loadMenu = () => {
const menuDiv = document.createElement('div');
menuDiv.classList.add('menu-container');

const headline = document.createElement('h1');
headline.textContent = 'Main bounties'
menuDiv.appendChild(headline);

const options = document.createElement('ol');
const options1 = document.createElement('li');
options1.textContent = 'Blood first special - 450g ';
options.appendChild(options1);
menuDiv.appendChild(options);

return menuDiv;







}
export default loadMenu;