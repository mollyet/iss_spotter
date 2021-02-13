//temporary
// const { fetchMyIP } = require("./iss");

// const { fetchCoordsByIP } = require("./iss");

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("Oops! Looks like there is an error!", error);
//     return;
//   }
//   console.log("It worked! Returned IP: ", ip);
// });

// fetchCoordsByIP("96.54.120.125", (error, coords) => {
//   if (error) {
//     console.log("None Pizza Left Beef: This didn't work: ", error);
//     return;
//   }
//   console.log("Congratulation! Here are your coordinates:", coords);
// });

// const { fetchFlyOver } = require("./iss");
// const expCoords = { latitude: 49.2403, longitude: -124.8026 };
// // const lolNo = { latitude: "cheese", longitude: "bread"};

// fetchFlyOver(expCoords, (error, passTimes) => {
//   if (error) {
//     console.log("ISS Who?: ", error);
//     return;
//   }
//   console.log("Space, the final frontier: ISS Flyover times", passTimes);
// });

const { nextFlyOver } = require("./iss");

const printNextFlyOver = function (passTimes) {
  for (const pass of passTimes) {
    const dateTime = new Date(0);
    dateTime.setUTCSeconds(pass.risetime);
    console.log(`Next pass at ${dateTime} for ${pass.duration} seconds!`)
  }
}

nextFlyOver((error, passTimes) => {
  if(error) {
    return console.log("Whoops! ", error);
  }
  printNextFlyOver(passTimes);
});
