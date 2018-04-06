const HID = require('node-hid');
let devices = HID.devices();
let path = devices[0].path;

console.log(devices[0].path);
console.log(devices.length);

let device = new HID.HID(path);

device.on('data', data=>{
	console.log(data);
})