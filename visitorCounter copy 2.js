window.onload = function () {
	var visitors = localStorage.getItem('on_load_counter');

	if (visitors === null) {
		visitors = 0;
	}

	visitors++;

	localStorage.setItem("on_load_counter", visitors);

	document.getElementById('CounterVisitor').innerHTML = "Visitors Count: " + visitors;
};