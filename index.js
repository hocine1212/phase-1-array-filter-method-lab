// Code your solution here
function findMatching(arr, name) {
  const driver = arr.filter((e) => e.toUpperCase() === name.toUpperCase());
  return driver;
}

function fuzzyMatch(arr, name) {
  const driver = arr.filter((e) => e.slice(0, 2) === name.slice(0, 2));
  return driver;
}

function matchName(arr, name) {
  const driver = arr.filter((e) => e.name === name);
  return driver;
}
