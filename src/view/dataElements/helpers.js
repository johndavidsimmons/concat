const buildOutputString = (array) => {
  let output = "";
  array.forEach(el => {
    output += el.value;
  });
  return output;
}

const buildOutputArray = (array) => {
  let output = [];
  array.forEach(el => output.push(el.value));
  return output;
}

const setTextPreview = () => {
  //reset output element
  document.querySelector("#output").value = "";

  // put sum of all values in output string
  document.querySelector("#output").value += buildOutputString(addFieldInputs());

  // put array in view
  document.querySelector("#outputArray").innerText = "";
  document.querySelector("#outputArray").innerText += buildOutputArray(addFieldInputs())

}