function counter() {
  let ref = document.querySelector("h1");

  let currentValueStr = ref.innerHTML;
  let currentValue = parseInt(currentValueStr);

  currentValue++;

  // finally update the object
  ref.innerHTML = currentValue;
}
