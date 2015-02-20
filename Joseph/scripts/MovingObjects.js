function {
	//grab section1 by id
	var sec1 = document.getElementById("section1");

	//grab section2 by id
	var sec2 = document.getElementById("section2");

	//add click event to sec1 area
	sec1.addEventListener("click", function() {
		//store the innerHTML from sec1
		var innerHTML = this.innerHTML;

		//clear the innerHTML fron sec1
		this.innerHTML = '';

		//move stored innerHTML from sec1 to sec2
		sec2.innerHTML = innerHTML;
	});
}