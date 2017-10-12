function random(min, max) {
	return Math.floor((Math.random() * max) + min);
}
function GetValue() {
	return this.count;
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