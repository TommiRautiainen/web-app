
const emailnappi = document.querySelector('.lahetanappi');

emailnappi.addEventListener('click', e => {
  e.preventDefault();

    sendJSON();
  
});

function sendJSON(){
  let xhr = new XMLHttpRequest();
  let url = "https://salpausemail.azurewebsites.net/api/HttpTriggerCSharp2?code=PnWhScmEcspN8Fy7eYKnIZA37AFgUZ0fMQ1OpXOJ6dtBPBGNXAMIqQ==";

  xhr.open("POST", url, true);

  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
      console.log("valmis, yhteys toimii");
    }
  };
  const nimi = document.querySelector('#nimi').value;
  console.log(nimi);
  const email = document.querySelector('#email').value;
  console.log("nimikentän sisältö: " + email);
  const viesti = document.querySelector('#Viesti').value;
  console.log("viestikentän sisältö: " + viesti);
  var data = JSON.stringify({
    "EmailMsg": "Viestin lähettäjän sähköposti: " + email + ". Viestin sisältö: " + viesti,  //Kirjoittaa sisällön 
    "EmailTo": "tommi.rautiainen2", //oma sähköpostisi!!!!
    "EmailName": nimi//Nimi-kentän sisältö
  });
  xhr.send(data);
}