function main() {
    let compute = document.getElementById('compute');
	compute.addEventListener('click', () => {
        //let val = Number(document.getElementById('prime').value);
        //result.innerHTML = val;
        let prime = document.getElementById('prime').value;
        pollardRho(prime); 
    });
}

function pollardRho(prime) {
    let result = document.getElementById('result');
    let x = 2;
    let y = 2;
    let d = 1;
    while (d === 1) {
        x = g(x, prime);
        y = g(g(y, prime), prime);
        d = gcd(Math.abs(x - y), prime);
        if (d === prime) {
            return;
        } 
        else {
            if (d !== 1 && !isNaN(d)) {
                let str = "p = " + d + " and q = " + prime / d; 
                result.innerHTML = str;
            }
        }
    }
}
  
function g (x, prime) {
    return (Math.pow(x, 2) + 1) % prime
}

function gcd (a, b) {
    if (!b) {
        return a
    }

    return gcd(b, a % b)
}

function factorize(num) {
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