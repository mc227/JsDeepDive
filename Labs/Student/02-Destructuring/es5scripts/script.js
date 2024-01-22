"use strict";

var numbers = [];
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('add').addEventListener('click', doAdd);
});

function doAdd() {
  var numberElem = document.getElementById('number');
  var number = parseInt(numberElem.value);
  numbers.push(number);
  numberElem.value = ''; // Exercise 2 - Array destructuring.

  var item0 = numbers[0],
      item1 = numbers[1],
      itemOthers = numbers.slice(2);
  setHtml("#item0", item0);
  setHtml("#item1", item1);
  setHtml("#itemOthers", itemOthers.join(", ")); // Exercise 3 - Object destructuring.

  function stats() {
    var sum = 0;

    for (var i in numbers) {
      sum += numbers[i];
    }

    return {
      sum: sum,
      average: sum / numbers.length
    };
  }

  var _stats = stats(),
      sum = _stats.sum,
      average = _stats.average;

  setHtml("#sum", sum);
  setHtml("#average", average); // Exercise 4 - More object destructuring.
}

function setHtml(selector, html) {
  var element = document.querySelector(selector);

  if (element) {
    element.innerHTML = html;
  }
}
//# sourceMappingURL=script.js.map
