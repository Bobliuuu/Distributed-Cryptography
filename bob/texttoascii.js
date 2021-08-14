var ASCIIVALUE = [];

function main() {
	let password = document.getElementById('PassEntry');
	let button = document.getElementById("button1ID");
	let avtext = document.getElementById("avtext");
	let asciitxt = document.getElementById('asciitxt');
	let asciitot = document.getElementById('asciiID');
	button.addEventListener("click", async() => {
		let str = password.value;
		let arr = Array.from(str);
		if (arr.length === 0){
			avtext.style.display = "none";
			asciiID.style.display = "none";
		}
		else {
			//console.log(arr);
			let t = await dcpcc(arr);
			//console.log("FINISHED");
			//console.log(ASCIIVALUE);
			let ans = "";
			for (let i = 0; i < ASCIIVALUE.length; i++){
				console.log(ASCIIVALUE[i]);
				ans += ASCIIVALUE[i];
			}
			avtext.style.display = "block";
			asciitxt.innerHTML = ans;
			asciiID.style.display = "block";
			asciiID.style.backgroundColor = "lightblue";
		}
	});
}

async function dcpcc(arr){
	//console.log(arr);
	let jobfunc = function compile(program) {
		let av = program.charCodeAt(0);
		if (av <= 9){
			av = "00" + av.toString();
		}
		else if (av <= 99){
			av = "0" + av.toString();
		}
		else {
			av = av.toString();
		}
		console.log(av);
		return av;
	}
	let job = dcp.compute.for(arr, jobfunc);
	job.computeGroups = [{joinKey: 'insight', joinSecret: 'dcp'}];
	job.on('accepted', (event) => {
		console.log(' - Job accepted by scheduler, waiting for results');
		console.log(` - Job has id ${job.id}`);
		startTime = Date.now();
	});
	job.on('complete', (event) => {
		console.log(
		`Job Finished, total runtime = ${
			Math.round((Date.now() - startTime) / 100) / 10
		}s`,
		);
	});
	job.on('readystatechange', (event) => {
		console.log(`New ready state: ${event}`);
	});
	job.on('status', (event) => {
		console.log('Received status update:', event);
	});
	job.on('console', ({ message }) => {
		console.log('Received console message:', message);
	});
	
	job.on('result', ({ result, sliceNumber }) => {
		console.log("A slice result:", result, "at slice", sliceNumber);
	});
	job.on('error', (event) => {
		console.error('Received Error:', event);
	});
	
	job.public.name = 'Text To ASCII';
	job.public.description = 'Text Value To ASCII Value';
	
	// const results = await job.exec(compute.marketValue);
	
	const results = await job.localExec();
	let array1 = Array.from(results);
	ASCIIVALUE = array1;
	//console.log("FIHISHED FUNCTION");
	return true;
}

document.addEventListener('DOMContentLoaded', main);