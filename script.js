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

let newD=document.createElement('div');
newD.classList.add("mybox");
document.querySelector('body').append(newD);

let newH1=document.createElement('h1');
newH1.innerText="I'm in a div";
newD.appendChild(newH1);

let p=document.createElement('p');
p.innerText="MET TOO!!";
newD.appendChild(p);