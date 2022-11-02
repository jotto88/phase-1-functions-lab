function distanceFromHqInBlocks(someValue) {
  return Math.abs(someValue - 42);
}
function distanceFromHqInFeet(someValue) {
  return (distanceFromHqInBlocks(someValue) * 264);
}
function distanceTravelledInFeet(start, destination){
  return (Math.abs(start - destination) * 264);
}
function calculatesFarePrice(start, destination){
  let feet = total - 400
  if (total < 400) {
    return 0;
  }
  else if (total > 400 && total < 2000) {
    return feet * 0.02;
  }
  else if (total > 2000 && total < 2500) {
    return 25;
  }
  else {
      return 'cannot travel that far'
  }
}
