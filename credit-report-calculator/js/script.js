var futureDates = function(date, amount){
	// var table = document.querySelector('#futureDates tbody');
	// table.innerHTML = "";

	// for (var i = 0; i < amount; i++) {
	// 	var row = table.insertRow(i);
	// 	var cell = row.insertCell(0);
	// 	cell.innerHTML = (date.toDateString(date.setDate(date.getDate() + 28)));
	// }

	var ul = document.querySelector('#futureDates');
	ul.innerHTML = "";

	for (var i = 0; i < amount; i++) {
		var newLi = document.createElement("li"); 
		newLi.appendChild(document.createTextNode(date.toDateString(date.setDate(date.getDate() + 28))));
		ul.appendChild(newLi);
	}

	document.querySelector('#futureDates').style.display = "block";
	document.querySelector('#futureDatesHeader').style.display = "block";
};

var input = document.querySelector('#lastCb');
var result = document.querySelector('#result');
var results = document.querySelector('#results');

var payments = document.querySelector('#paymentsWanted');

document.querySelector('#submitButton').addEventListener('click', function(){
  var nextDate = new Date(input.value);
  nextDate.setDate(nextDate.getDate() + 28);

  results.style.display = 'block';
  result.innerHTML = nextDate.toDateString();

  futureDates(nextDate, (payments.value));

});