// function handleSubmit(evt) {
// 	evt.preventDefault();
	
// 	alert("Form has been submitted successfully")

function favColor(evt) {
    evt.preventDefault();

    alert('my favorite color is red')
}
function favPlace(evt) {
    evt.preventDefault();

    alert('my favorite place is Santorini, Greece')
}
function favRitual(evt) {
    evt.preventDefault();

    alert('my favorite ritual is coming home from class and playing video games!')
}

let ritual = document.getElementById('#ritual');
let place = document.getElementById('#place');
let color = document.getElementById('#color');

color.addEventListener('click', favColor)
place.addEventListener('click', favPlace)
ritual.addEventListener('click', favRitual)
