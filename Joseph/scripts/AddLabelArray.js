var array = ['first', 'second', 'third'];
var placementElement = document.getElementById('placementElement');

var x = 3;

do{
	//loop through the array and insert its elements on the page.
	for(var i = 0; i < array.length; i++){
		//grab the existing innerHTML and add to it the value of the array.
		switch(array[i]){
			case array[i] = 'first':
				placementElement.innerHTML = placementElement.innerHTML + '<div>' + array[i] + '</div>';
				break;
			case array[i] = 'second':
				placementElement.innerHTML = placementElement.innerHTML + '<div class="second">2nd</div>';
				break;
			case array[i] = 'third':
				placementElement.innerHTML = placementElement.innerHTML + '<div class="third">3 ba-bae!</div>';
 			default:
				break;
		}
	}
	x--;
}while(x > 0);