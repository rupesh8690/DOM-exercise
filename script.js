// let newP=document.createElement('p');
// newP.innerText="Hey I'm red!";
// document.querySelector('body').append(newP);

let newP = document.createElement('p');
newP.innerText = "Hey I'm red!";
newP.style.color = "red"; // This line sets the text color to red
document.querySelector('body').append(newP);

let newH=document.createElement('h3');
newH.innerText="I'm a blue h3!";
newH.classList.add('myheading');
document.querySelector('body').append(newH);
