const btn = document.getElementById("btn");
const heading = document.getElementById("heading");

function bgChange(){
  const ran =Math.floor(Math.random()*16777215);
  const ranCode = "#" + ran.toString(16); 
  document.body.style.backgroundColor = ranCode;
  heading.innerText=ranCode;

  navigator.clipboard.writeText(ranCode);
}

btn.addEventListener('click',bgChange);

bgChange();