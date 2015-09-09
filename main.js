document.querySelector("#update-button").addEventListener('click', function() {

var totalCost = Number(document.querySelector('#thimbles').value) + (Number(document.querySelector('#swords').value) * 37);

if (totalCost === 1) {
  document.querySelector("#the-total").textContent = totalCost + " money";
} else {
  document.querySelector("#the-total").textContent = totalCost + " monies";
}

});
