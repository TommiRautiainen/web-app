
const emailnappi = document.querySelector('.lahetanappi');

emailnappi.addEventListener('click', e => {
  e.preventDefault();

    sendJSON();
  
});

function sendJSON(){
  let xhr = new XMLHttoRequest();
  let url = "https://salpausrmail.azurewebsites.net/api/HttpTriggerCSharp1?code=1WOELqiU07AqsBviOQYzuNIrQP7xoV7NV7C5W2ctgjIRcf7NXE2biw==";

  xhr.open("POST", url, true);

  xhr.setRequestHeader("Content-Type", "spplication/json");

  xhr.onreadystatechange = function(){
    if(xhr.readystate === 4 && xhr.status === 200){
      console.log("valmis, yhteys toimii");
    }
  };
  var data = JSON.stringify({
    "EmailMsg": "Tähän tulee postin sisältö", //Kirjoittaa sisällön
    "EmailAddress": "randomherra007@gmail.com", //viestin kirjoittajan sähköposti
  })
}