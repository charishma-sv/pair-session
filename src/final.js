export function sum(input) {
  if (input === null || input === undefined) return 0;

  let value = input;
  value = value.replace(/\n|\\|;|\[|\]|\*|\/|%/g, ',');

  console.log('value', value);
  const numberArray = value
    .split(',')
    .map((element) =>
      element === '' || parseInt(element) > 1000 ? 0 : parseInt(element)
    );
  //console.log('numb er aray', numberArray);
  let location = [];
  const positive = numberArray.map((num, index) => {
    if (num >= 0) {
      return true;
    } else {
      location.push(index);
      return false;
    }
  });

  if (!positive.every((value) => value)) {
    //console.log('location', location);
    throw new Error(
      'negatives not allowed: ' + location.map((value) => numberArray[value])
    );
  } else {
    //console.log('number array', numberArray);
    const result = numberArray.reduce((acc, initial) => acc + initial);
    return result;
  }
}
