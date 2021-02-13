// index2.js

const { nextFlyOver } = require('./iss_promised');

const printNextFlyOver = function (passTimes) {
  for (const pass of passTimes) {
    const dateTime = new Date(0);
    dateTime.setUTCSeconds(pass.risetime);
    console.log(`Next pass at ${dateTime} for ${pass.duration} seconds!`)
  }
}


nextFlyOver()
.then((passTimes) => {
  printNextFlyOver(passTimes)
})
.catch((error) => {
  console.log("Look! A wild Error as been spotted! ", error.message);
});