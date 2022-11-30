// Count appearances of each letter in an array; Return in an object {}
arr = ['a', 'b', 'c', 'd', 'e', 'f', 'a']
count = {}

for (let i = 0; i<arr.length; i++){
    if (count[arr[i]]){
        count[arr[i]]++;
    }
    else {
        count[arr[i]] = 1;
    }
    
}

console.log(count)