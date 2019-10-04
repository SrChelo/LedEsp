let btnOn = 0;
let btnOff = 0;
let state = true;

var client = mqtt.connect('wss://polloLSW:PolloSecreto@broker.shiftr.io',{
  clientId:'Controlador Web'
});
 var body = document.getElementById('body');
 var btn = document.getElementById('btn');
 var sp = document.getElementById('sp');
 /*
 Llamado de función de encendido y de apagado, determinar por resultado
 de respuesta del servidor, crear función que detrmine eso
 */
 function ActualizarUI() {
   if(state){
     body.style.background = "#eee";
     btn.style.background = "#000";
     sp.style.background = "#000";
     sp.style.border = "3px solid #fff";
     sp.classList.remove('sp');
     sp.classList.add('spa');
     LedOn();
     state = false;
   } else {
     body.style.background = "#222";
     btn.style.background = "#fff";
     sp.style.background = "#fff";
     sp.style.border = "3px solid #000";
     sp.classList.remove('spa');
     sp.classList.add('sp');
     LedOff();
     state = true;
   }
 }
 function LedOn(){
   console.log("Encender Led");
   client.publish('/ALSW/Led','1');
 }
 function LedOff() {
   console.log("Apagar Led");
   client.publish('/ALSW/Led','0');
 }
client.on('connect',function(){
  console.log("MQTT conectado");
  client.subscribe('/ALSW/Boton');
});
