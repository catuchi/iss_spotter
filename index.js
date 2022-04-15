const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log("It worked! Returned IP:", ip);
// });

// fetchCoordsByIP("174.116.83.205", (error, coordinates) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   console.log('It worked! Return coordinates:', coordinates);
// });

// fetchISSFlyOverTimes({ latitude: 45.4223, longitude: -75.7081 }, (error, flyoverTimes) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   console.log('It worked! Returned flyover times:', flyoverTimes);
// });

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }

  printPassTimes(passTimes);
});
