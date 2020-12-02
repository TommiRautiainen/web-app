const ul = document.querlySelector(".kurssi");
const nimiSisalto = document.querySelector("#nimi");
const kurssinappi = document.querySelector(".kurssinappi");
const virhe = document.querySelector(".virheilmoitus");
const asiaSisalto = document.querySelector("#tieto")
const viesti = document.querySelector("#tiedot")

kurssinappi.addEventListener('click', e =>{
  e.preventDefault();
  if(nimiSisalto.value ===  '' || asiaSisalto.value === ''){
    virhe.classList.add("virhe");
    virhe.innerHTML="Täytä kaikki kentät";
    kurssinappi.style.backround = "red";
    kurssinappi.value= "Virhe! En lisännyt tietoa.";
    setTimeout(() => virhe.classList.remove("virhe"), 3000);
    setTimeout(() => virhe.innerHTML="", 3000);
    setTimeout(() => kurssinappi.style.backround = "rgb(51, 44, 44)", 3000);
    setTimeout(() => kurssinappi.value = "Lisää tieto", 3000);
  }else{
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(`${nimiSisalto.value}: $
    {asiaSisalto.value}`));
    viesti.appendChild(li);
    nimiSisalto.value = " ";
    asiaSisalto.value = " ";
  }
});

const merkitseValmiit = document.querySelector(".merkinta");

merkitseValmiit.addEventListener("click", e => {
  e.preventDefault();

  if(document.querySelector("#tehta").checked){
    ul.children[0].innerHTML = '<input type="checkbox" id="tehta" checked>innerHTML tunnit pidetty';
  }else{
    ul.children[0].innerHTML = '<input type="checkbox" id="tehta" checked>HTML';
  }
   if(document.querySelector("#tehtb").checked){
    ul.children[1].innerHTML = '<input type="checkbox" id="tehtb" checked>CSS tunnit pidetty';
  }else{
    ul.children[1].innerHTML = '<input type="checkbox" id="tehtb" checked>CSS';
  }
   if(document.querySelector("#tehtc").checked){
    ul.children[2].innerHTML = '<input type="checkbox" id="tehtc" checked>JavaScript tunnit pidetty';
  }else{
    ul.children[2].innerHTML = '<input type="checkbox" id="tehtc" checked>JavaScript';
  }
   if(document.querySelector("#tehtd").checked){
    ul.children[3].innerHTML = '<input type="checkbox" id="tehtd" checked>CI/CD tunnit pidetty';
  }else{
    ul.children[3].innerHTML = '<input type="checkbox" id="tehtd" checked>CI/CD';
  }
});