function slide(){
	let first = document.getElementById('first');
	let second = document.getElementById('second');

	first.classList.toggle("show");
	first.classList.toggle("hide");
	second.classList.toggle("hide");
	second.classList.toggle("show");
};