// Your code here
const dodger = document.getElementById("dodger");
function moveDodgerLeft() {
  const leftNumbers1 = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers1, 10);
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
};


function moveDodgerRight() {
    const rightNumbers1 = dodger.style.left.replace("px", "");
    const right = parseInt(rightNumbers1, 10);
    if (right < 360) {
        dodger.style.left = `${right + 1}px`;
        }
    }


