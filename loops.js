//for loops
for(let i=1; i<=10; i++){
    //console.log(i);
}

//------------------------------------------------------------------------------------------
//while loop
let x=1;
while(x<=5){
    //console.log("JavaScript");
    x++;
}

//------------------------------------------------------------------------------------------
// do-while loop
let y=1;
do{
    //console.log("This is a do-while loop");
}while(y<1);

//------------------------------------------------------------------------------------------
//for-of loop
const arr = [1,2,3,4,5];
for (const i of arr) {
    //console.log(i);
}
//------------------------------------------------------------------------------------------
//Maps
const map = new Map();
map.set('IN' ,"India");
map.set('AUS' ,"Australia");
map.set('NZ' ,"New Zealand");
map.set('IN' ,"India");   //would be ignored, only unique values.
console.log(map);

for (const [key,value] of map) {   //destructuring of array in [key,val]
    console.log(key, ":-", value);
}