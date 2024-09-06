function makeid(l) {
  // write your code here
	let res = "";
	let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	for (let i = 0; i < l; i++) {
		const str = Math.floor(Math.random() * characters.length);
		res += characters[str];
	} return res;
	
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
