// https://calculator.swiftutors.com/efficiency-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const efficiencyRadio = document.getElementById('efficiencyRadio');
const workInputRadio = document.getElementById('workInputRadio');
const workOutputRadio = document.getElementById('workOutputRadio');

let efficiency;
let workInput = v1;
let workOutput = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

efficiencyRadio.addEventListener('click', function() {
  variable1.textContent = 'Work Input (J)';
  variable2.textContent = 'Work Output (J)';
  workInput = v1;
  workOutput = v2;
  result.textContent = '';
});

workInputRadio.addEventListener('click', function() {
  variable1.textContent = 'Efficiency (%)';
  variable2.textContent = 'Work Output (J)';
  efficiency = v1;
  workOutput = v2;
  result.textContent = '';
});

workOutputRadio.addEventListener('click', function() {
  variable1.textContent = 'Efficiency (%)';
  variable2.textContent = 'Work Input (J)';
  efficiency = v1;
  workInput = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(efficiencyRadio.checked) 
    result.textContent = `Efficiency = ${computeEfficiency().toFixed(2)} %`;

  else if(workInputRadio.checked)
    result.textContent = `Work Input = ${computeWorkInput().toFixed(2)} J`;

  else if(workOutputRadio.checked)
    result.textContent = `Work Output = ${computeWorkOutput().toFixed(2)} J`;
})

// calculation

function computeEfficiency() {
  return (Number(workOutput.value) / Number(workInput.value)) * 100;
}

function computeWorkInput() {
  return Number(workOutput.value) / (Number(efficiency.value) / 100);
}

function computeWorkOutput() {
  return (Number(efficiency.value) / 100) * Number(workInput.value);
}