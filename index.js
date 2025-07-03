function roundToNiceNumber(x) {
  return Number.parseFloat(x).toFixed(2);
}

function calculateHHF(time, points) {
  return points / time;
}

function calculateTheLoss(hhf) {
  return {
    C: roundToNiceNumber(2 / hhf),
    D: roundToNiceNumber(4 / hhf),
    M: roundToNiceNumber(15 / hhf),
  };
}

const calculateButton = document.getElementById("calculate");
const pointsInput = document.getElementById("points");
const timeInput = document.getElementById("time");
const cResult = document.getElementById("c-result");
const dResult = document.getElementById("d-result");
const mResult = document.getElementById("m-result");

calculateButton.addEventListener("click", () => {
  const t = timeInput.value;
  const p = pointsInput.value;
  const hhf = calculateHHF(t, p);
  const loss = calculateTheLoss(hhf);
  cResult.innerText = loss.C;
  dResult.innerText = loss.D;
  mResult.innerText = loss.M;
});
