function makeid(l) {
  // write your code here
	let res = "";
	let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	for (let i = 0; i < l; i++) {
		const str = characters.charAt( Math.floor(Math.random() * characters.length));
		res += str;
	} return res;
	
}

// Do not change the code below.
// const l = prompt("Enter a number.");
alert(makeid(l));
