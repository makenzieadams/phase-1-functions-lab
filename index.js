const headquarters = 42;
function distanceFromHqInBlocks(destination) {
  return Math.abs(headquarters - destination);
}

const blockInFeet = 264;
function distanceFromHqInFeet(destination) {
  const blocks = distanceFromHqInBlocks(destination);
  return blockInFeet * blocks;
}

function distanceTravelledInFeet(start, end) {
  const blocks = Math.abs(start - end);
  return blockInFeet * blocks;
}

const cents = 0.02;
function calculatesFarePrice(start, end) {
  const feet = distanceTravelledInFeet(start, end);
  if (feet <= 399) {
    return 0;
  } else if (feet <= 2000) {
    return cents * (feet - 400);
  } else if (feet <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
