var arr = [];
for (var i = 0; i < 5; i++) {
	arr[i] = {};
	arr[i].count = random(1,10);
	var type = random(1,3);
	switch(type) {
		case 1:
			arr[i].GetCount1=function() { return this.count; };
			break;
		case 2:
			arr[i].GetCount2=function() { return this.count; };
			break;
		case 3:
			arr[i].GetCount3=function() { return this.count; };
			break;
	}
	console.log("Element: type=%s, count=%s", type,arr[i].count);
}
