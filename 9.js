function addMore() {
  let ref = document.querySelector("div");

  let oldValue = ref.innerHTML;
  let newValue = "<h1>Hello World</h1>";

  ref.innerHTML = oldValue + newValue;
}
