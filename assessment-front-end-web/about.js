console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form has been submitted successfully")
}
function somethingNice(evt) {
	evt.preventDefault();

	alert("you are so cute!")
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
document.querySelector('img').addEventListener('mouseover', somethingNice);
