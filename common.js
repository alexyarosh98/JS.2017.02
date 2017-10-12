function random(min, max) {
	return Math.floor((Math.random() * max) + min);
}

function Sum() {
	var firstType = 0;
	var secondType = 0;
	var thirdType = 0;

	for (var i = 0; i < arr.length; i++) {
		firstType += arr[i].GetCount1 == undefined ? 0 : arr[i].GetCount1();
		secondType += arr[i].GetCount2 == undefined ? 0 : arr[i].GetCount2();
		thirdType += arr[i].GetCount3 == undefined ? 0 : arr[i].GetCount3();
	}
	return [firstType, secondType, thirdType];
}
function GetCounter(element) {
	console.log(element);
	if (element.GetCount1 != undefined) {
		return element.GetCount1();
	}
	else if(element.GetCount2 != undefined) {
		return element.GetCount2();
	}
	else return element.GetCount3();
}