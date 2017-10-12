var arr = [];
for (var i = 0; i < 5; i++) {
	arr[i] = {};
	var type = random(1,3);
	var result=random(1,10);
	
	switch(type) {
		case 1:
			(function(result) {
			arr[i].GetCount1 = function() {
				return result;
			};
			})(result);
			break;
		case 2:
		
			(function(result){
			arr[i].GetCount2 = function() {
				return result;
			};
			})(result);
			break;
		case 3:
			(function(result) {
			arr[i].GetCount3 = function() {
				return result;
			};
			})(result);
			break;
	}
	console.log("Element: type=%s, count=%s", type, GetCounter(arr[i]));
}
