var loads = "";

function main() {
    let password = document.getElementById("password");
    let url = document.getElementById("url");
    let crack = document.getElementById("crack");
    var pre = document.getElementById('pre');
    files_input.addEventListener('change', checkFile, false);
    document.getElementById('crack').addEventListener('click', function () {
        console.warn(loads);
        pre.innerText = loads;
    }, false);
    crack.addEventListener("click", () => {
        if (loads){
            let ret = check(password.value);
            if (ret){
                pre.innerHTML = "Password found! Your password is: " + password.value;
            }
            else {
                pre.innerHTML = "Password not found."
            }
        }
        else if (url.value != "") {
            let ans = getValUrl(url.value, password.value);
            if (ans == true){
                pre.innerHTML = "Password found! Your password is: " + password.value;
            }
            else {
                pre.innerHTML = "Password not found."
            }
        }
    });
    async function getValUrl(u, p) {
        let response = await fetch(u);
        //console.log(response);
        let data = await response.text();
        let arr = data.split("\n");
        //console.log(arr);
        for (let i = 0; i < arr.length; i++){
            if (arr[i] == p){
                return true;
            }
        }
        return false;
    }
}

function checkFile(evt) {
    var files = evt.target.files;
    var file = files[0];
    reader = new FileReader();
    reader.onload = (function (file) {
        return function (e) { 
            var data = this.result; 
            loads = data;
        }
    })(file);
    reader.readAsText(file);
}

function check(p){
    let arr = loads.split("\n");
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == p){
            return true;
        }
    }
    return false;
}

/*
function getValFile(file) {
    //console.log(file); // .txt file
    var reader = new FileReader();
    reader.onload = (function (file) { 
        return function (e) { // return handler function for 'onload' event
            var data = this.result; // do some thing with data
            file_text = data;
        }
    })(file);
    reader.readAsText(file);
}
*/

/*
const fs = require('fs')
fs.readFile('Input.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
})
*/

document.addEventListener('DOMContentLoaded', main);