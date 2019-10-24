/* eslint-disable no-unused-vars */
"use strict";
function maxval(obj) {
	let a = Number(obj.num1.value);
	let b = Number(obj.num2.value);
	let c = Number(obj.num3.value);
	let m = a;
	if (b > m) m = b;
	if (c > m) m = c;
	obj.res1.value = m;
}
function max_of_5(arr_elems) {
	let result = 1,
		max = arr_elems[0].value;
	for (let i = 1; i < arr_elems.length; i++) {
		if (arr_elems[i].value === max) {
			result++;
		} else if (arr_elems[i].value > max) {
			result = 1;
			max = arr_elems[i].value;
		}
	}
	document.getElementById("Answer").value = result;
}
function check_triangle(sides) {
	document.getElementById("Check").value =
		+sides[0].value < +sides[1].value + +sides[2].value &&
		+sides[1].value < +sides[0].value + +sides[2].value &&
		+sides[2].value < +sides[0].value + +sides[1].value;
}
function check_quarter(x, y) {
	if (x == 0 || y == 0)
		document.getElementById("Check_quarter").value = undefined;
	if (x > 0 && y > 0) document.getElementById("Check_quarter").value = 1;
	if (x > 0 && y < 0) document.getElementById("Check_quarter").value = 2;
	if (x < 0 && y < 0) document.getElementById("Check_quarter").value = 3;
	if (x < 0 && y > 0) document.getElementById("Check_quarter").value = 4;
}
