//for decrypt.html

function main() {
	let computeANS = document.getElementById("computeANS");
	computeANS.addEventListener("click", findANS);
}

function findANS() {
	let nval = document.getElementById("nval");
	let val = document.getElementById("val");
	let ans = bigInt(bigInt(nval.value).modPow(bigInt(localStorage.getItem("d")), bigInt(localStorage.getItem("n"))));
	val.innerHTML = ans.toString();
}

document.addEventListener('DOMContentLoaded', main);