// for encrypt.html 

var p, q;

// ALL VALUES SHOULD BE LET
// EVERYTHING IS BIGINT 

function main() {
	//const BigNumber = require('big-number');
	//let x = new BigNumber(123.4567);
	//console.log(globalE);
	let generateprime = document.getElementById("generateprime");
	let numDigits = document.getElementById("numDigits");
	let generate = document.getElementById("generate");
	let pval = document.getElementById("pval");
	let qval = document.getElementById("qval");
	let computeP = document.getElementById("computeP");
	let computeQ = document.getElementById("computeQ");
	let pprime = document.getElementById("pprime");
	let qprime = document.getElementById("qprime");
	let computeN = document.getElementById("computeN");
	let valN = document.getElementById("n");
	let valE = document.getElementById("e");
	let valD = document.getElementById("d");
	generateprime.addEventListener("click", () => {
		printResult(numDigits.value);
	});
	async function printResult(num) {
		var str = await getPrime(num);
		//console.log(str);
		generate.innerHTML = str;
	}
	async function getPrime(num) {
		if (num == 0){
			return "";
		}
		let response = await fetch("https://big-primes.ue.r.appspot.com/primes?digits="+num);
		//console.log(response);
		let data = await response.json();
		//console.log(data["Primes"][0]);
		return data["Primes"][0];
	}
	pval.addEventListener("input", () => {
		pprime.innerHTML = "";
		p = false;
	});
	qval.addEventListener("input", () => {
		qprime.innerHTML = "";
		q = false;
	});
	computeP.addEventListener("click", () => {
		let a = bigInt(pval.value);
		//alert(a);
		p = bigInt(a).isProbablePrime(5);
		if (p){
			pprime.innerHTML = "p is prime!";
		}
		else {
			pprime.innerHTML = "p is not prime!";
		}
	});
	computeQ.addEventListener("click", () => {
		let a = bigInt(qval.value);
		//alert(a);
		q = bigInt(a).isProbablePrime(5);
		if (q){
			qprime.innerHTML = "q is prime!";
		}
		else {
			qprime.innerHTML = "q is not prime!";
		}
	});
	computeN.addEventListener("click", () => {
		if (p && q){
			let ans = bigInt(bigInt(pval.value) * bigInt(qval.value));
			let e = findE(pval.value, qval.value);
			//console.log(e);
			valN.innerHTML = "The value of n is " + ans.toString() + ".";
			valE.innerHTML = "The value of e is " + e[0].toString() + ".";
			valD.innerHTML = "The value of d is " + e[1].toString() + ".";
			localStorage.setItem("e", e[0].toString());
			localStorage.setItem("d", e[1].toString());
			localStorage.setItem("n", ans.toString());
			localStorage.setItem("p", pval.value);
			localStorage.setItem("q", qval.value);
			let big = bigInt(bigInt(pval.value).minus(1)).multiply(bigInt(qval.value).minus(1));
			localStorage.setItem("pq", big.toString());
		}
		else {
			valN.innerHTML = "We cannot perform RSA unless p and q are both prime!";
		}
	});
}

function findE(pv, qv){
	let big = bigInt(bigInt(pv).minus(1)).multiply(bigInt(qv).minus(1));
	let ans = bigInt.zero;
	let num = [3, 5, 17, 257, 65537]; // secure values for e
	for (let i = 0; i < num.length; i++){
		if (bigInt(bigInt.gcd(bigInt(num[i]), big)).equals(1) && bigInt(big).greater(num[i])){
			//console.log("val: " + bigInt.gcd(num, big).toString());
			ans = bigInt(num[i]);
			break;
		}
	}
	let val = bigInt(ans).modInv(big);
	console.log(val);
	let arr = [ans, val];
	return arr;
}

function randBetween(a, b, rng) {
	a = parseValue(a);
	b = parseValue(b);
	var usedRNG = rng || Math.random;
	var low = min(a, b), high = max(a, b);
	var range = high.subtract(low).add(1);
	if (range.isSmall) return low.add(Math.floor(usedRNG() * range));
	var digits = toBase(range, BASE).value;
	var result = [], restricted = true;
	for (var i = 0; i < digits.length; i++) {
		var top = restricted ? digits[i] : BASE;
		var digit = truncate(usedRNG() * top);
		result.push(digit);
		if (digit < top) restricted = false;
	}
	return low.add(Integer.fromArray(result, BASE, false));
}

function isPrime(num) {
	if (num <= 1n) {return false;}
	let s = rootNth(num) + 1n;
	//alert(num);
    for(let i = 2n; i <= s; i++){
		//alert(i);
        if(num % i === 0n) {
			//alert(i);
			return false; 
		}
	}
    return true;
}

function rootNth(val, k=2n) {
    let o = 0n; // approx value
    let x = val; // value we want to calculate
    let limit = 100;
    // Newton's method (why does this exist)
    while(x**k!==k && x!==o && --limit) {
      o=x;
      x = ((k-1n)*x + val/x**(k-1n))/k;
    }
    return x;
}

document.addEventListener('DOMContentLoaded', main);