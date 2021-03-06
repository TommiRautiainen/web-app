//'https://func-weather.azurewebsites.net/api/HttpTriggerCSharp2?code=03Hf14xSawGyeGtfxZTCLJ5mGLx0GGusap2f3zssPqg6n3KriqizHg==&DeviceId=250033001847393035313138&amount=10'


var getJSON = function(url, callback) {

  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';

  xhr.onload = function() {

      var status = xhr.status;
      if (status == 200) {
         callback(null, xhr.response);
      } else {
          callback(status);
      }
  };

  xhr.send();
};

getJSON('https://func-weather.azurewebsites.net/api/HttpTriggerCSharp2?code=03Hf14xSawGyeGtfxZTCLJ5mGLx0GGusap2f3zssPqg6n3KriqizHg==&deviceId=250033001847393035313138&amount=10', function(err, data){
  let taulukko = `<table width="100%" style="border=1px solid black"><tr><td>Ilmankosteus</td><td>Lämpötila</td><td>Höyrystymispiste</td><td>Lämpötila tuntuu</td><td>Valoisuus</td></tr>`;
  const historia = data.map(function(mittaus){

      taulukko = taulukko + `<tr><td>${mittaus.Hum}</td>`;
      taulukko = taulukko + `<td>${mittaus.Temp}</td>`;
      taulukko = taulukko + `<td>${mittaus.DP}</td>`;
      taulukko = taulukko + `<td>${mittaus.HI}</td>`;
      taulukko = taulukko + `<td>${mittaus.Light}</td></tr>`;
      
    
  });
  taulukko = taulukko + `</table>`;
  document.body.innerHTML = taulukko;
});