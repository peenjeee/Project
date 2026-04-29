import { EventEmitter } from 'events';
 
const myEventEmitter = new EventEmitter();
 
const birthdayEventListener = (name) => {
  console.log(`Happy birthday ${name}!`);
}
 
const onbirthdayEventListener = ({ name }) => {
  birthdayEventListener(name);
}
 
myEventEmitter.on('birthday', onbirthdayEventListener);

myEventEmitter.emit('birthday', { name: 'Budi' });