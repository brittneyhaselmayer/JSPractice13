const oWords = (sentence) => {
	const arr = sentence.split(' ');
	const filtered = arr.filter((ele) => ele.includes('o'));
	console.log(filtered);
};

// oWords('Boo, i watch too much netflix');

const lastIndex = (str, char) => {
	let index;
	for (let i = 0; i < str.length; i++) {
		if (str[i] === char) {
			index = i;
		}
	}

	console.log(index);
};

// lastIndex('brittney', 't');

const mostVowels = (sent) => {
	let arr = sent.split(' ');
	let num = 0;
	let highest;

	for (let i = 0; i < arr.length; i++) {
		let x = vowelCount(arr[i]);
		if (x > num) {
			num = x;
			highest = arr[i];
		}
	}
	console.log(highest);
};

const vowelCount = (word) => {
	let count = 0;
	let vowels = 'aeiouAEIOU';
	word.split('').forEach((ele) => {
		if (vowels.includes(ele)) {
			count += 1;
		}
	});
	return count;
};

// mostVowels('I am counting the vowels in all these words aeiou');

const prime = (num) => {
	let ret = true;

	for (let i = 2; i < num; i++) {
		if (num % i === 0) {
			ret = false;
		}
	}
	return ret;
};

// prime(4);

const pickPrimes = (arr) => {
	let filtered = [];
	for (let i = 0; i < arr.length; i++) {
		if (prime(arr[i])) {
			filtered.push(arr[i]);
		}
	}
	console.log(filtered);
};

// pickPrimes([2, 6, 9, 11, 401]);
