function nextPalindrome(num) {
  //your JS code here.
	let number=parseInt(num)+1;

	while(!isPallindrome(number.toString())){
		number=number+1;
	}
	return number;
}
function isPallindrome(str){
	return str===str.split('').reverse().join('');
}

const input = prompt("Enter a palindrome number");
alert(nextPalindrome(input));
