import { Alert, Tooltip } from 'bootstrap'


const alert = new Alert(document.getElementsByClassName('alert')[0])

setTimeout(() => {
  alert.close()
}, 5000);

document.querySelectorAll('.ttp').forEach(el => {
  new Tooltip(el);
});
