export default loadHome;

function loadHome() {

  const homeDiv = document.createElement('div');
  homeDiv.classList.add('home-container');

  const headline = document.createElement('h1');
  headline.textContent = "Welcome to the Restaurant of Draven";
  homeDiv.appendChild(headline);
  
  const hours = document.createElement('li');
  hours.textContent = "Sunday: 8am - 8pm Monday: 6am - 6pm Tuesday: 6am - 6pm Wednesday: 6am - 6pm Thursday: 6am - 10pm Friday: 6am - 10pm Saturday: 8am - 10pm" ; 
  homeDiv.appendChild(hours);

  return homeDiv;

  

  
 
}