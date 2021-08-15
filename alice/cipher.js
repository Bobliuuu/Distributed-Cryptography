//for decrypt.html

function main() {
	let computeR = document.getElementById("computeR");
	computeR.addEventListener("click", findR);
}

function findR() {
	let nval = document.getElementById("nval");
	let rval = document.getElementById("rval");
	let bignval = bigInt(nval.value);
	//console.log(bignval);
	//console.log(bigInt(localStorage.getItem("e")));
	let ans = bigInt(bigInt(bignval).modPow(bigInt(localStorage.getItem("e")), bigInt(localStorage.getItem("n"))));
	rval.innerHTML = ans.toString();
	localStorage.setItem("text", rval.innerHTML);
}

function back() {
	window.location.href = "alice.html";
}

document.addEventListener('DOMContentLoaded', main);