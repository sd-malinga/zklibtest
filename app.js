const ZKLib = require('zklib');

const func=()=>{
ZK = new ZKLib({
  ip: '165.22.212.149',
  port: 4370,
  inport: 5200,
  timeout: 5000,
});
 
// connect to access control device
ZK.connect(function(err) {
  if (err) throw err;
 
  // read the time info from th device
  ZK.getTime(function(err, t) {
    // disconnect from the device
    ZK.disconnect();
 
    if (err) throw err;
 
    console.log("Device clock's time is " + t.toString());
  });
});
}

func();