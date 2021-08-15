let password = document.getElementById('PassEntry');
let button = document.getElementById("button1ID");
let avtext = document.getElementById("avtext");
let asciitxt = document.getElementById('asciitxt');
let asciitot = document.getElementById('asciiID');

button.addEventListener("click", () => {
	let str = password.value;
	str = str.substr(1);
	console.log(str);
	let arr = str.match(/.{1,3}/g);
	console.log(arr);
	let ans = "";
	for (let i = 0; i < arr.length; i++){
		if (Number(arr[i]) <= 31 || Number(arr[i]) >= 128){
			continue;
		}
		ans += String.fromCharCode(arr[i]);
	}
	//console.log(ans);
	if (ans == ""){
		avtext.style.display = "none";
		asciiID.style.display = "none";
	}
	else {
		avtext.style.display = "block";
		asciitxt.innerHTML = ans;
		asciiID.style.display = "block";
		asciiID.style.backgroundColor = "lightblue";
	}
});

function back(){
	window.location.href = "bob.html";
}

/*
const characters = String.fromCharCode(97, 98);
console.log(characters); // "ab"
*/