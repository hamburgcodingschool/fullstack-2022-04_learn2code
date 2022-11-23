
values = [12, 14, 10, 15]
maxPos = 0
maxValue = values[0]

for (i=0; i<values.length; i++){
    if (maxValue > values[i]){
		maxValue = values[i]; 
        maxPos = i;
    }

    console.log(maxValue);
    console.log(maxPos);	
}


