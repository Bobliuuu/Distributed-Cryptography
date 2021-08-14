let password = document.getElementById('PassEntry');
let button = document.getElementById("button1ID");
let avtext = document.getElementById("avtext");
let asciitxt = document.getElementById('asciitxt');
let asciitot = document.getElementById('asciiID');

button.addEventListener("click", () => {
	let str = password.value;
	let ans = "1";
	for (let i = 0; i < str.length; i++){
		let av = str.charCodeAt(i);
		if (av <= 99){
			ans += ("0" + av.toString());
		}
		else {
			ans += av.toString();
		}
	}
	if (ans == ""){
		avtext.style.display = "none";
		asciiID.style.display = "none";
	}
	else {
		avtext.style.display = "block";
		asciitxt.innerHTML = ans.toString();
		asciiID.style.display = "block";
		asciiID.style.backgroundColor = "lightblue";
	}
});