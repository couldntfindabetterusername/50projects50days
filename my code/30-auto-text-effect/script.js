const counter = document.getElementById("number");
let speed = parseInt(counter.value);

const wrapper = document.getElementById("wrapper");

wrapper.innerText = "";

text = "We Love Programming!";

counter.addEventListener("change", () => {
  speed = parseInt(counter.value);
});

function display() {
  console.log(text.split(""));

  setInterval(() => {
    for (let i = 0; i < text.split("").length; i++) {
      const letter = text.split("")[i];
      wrapper.innerText += letter;
    }
  }, 1000);
}

display();
