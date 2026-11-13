//FOR EACH LOOP 
const companies = ["Samsung", "Apple", "OnePlus", "Huawei", "Nothing"];

companies.forEach( function (val){
    console.log(val);
})

console.log("WITH ANOTHER SYNTAX: -");

companies.forEach( val => {
    console.log(val);
})
//-------------------------------
console.log("WITH ALREADY MADE FUNCTION: -");

function printMe(name){
    console.log(name);
}
companies.forEach(printMe);  //just pass a reference, dont execute by printMe()

//-------------------------------
companies.forEach( function (val, index,arr){
    console.log(val, index,arr);
})
//Or,
companies.forEach( (val,index,arr) => {
    //console.log(val,index,arr);
})
//-------------------------------

const arrayOfObj = [
    {
        lang : "C++",
        fileName : "cpp"
    },
    {
        lang : "Python",
        fileName : "py"
    },
    {
        lang : "JavaScript",
        fileName : "js"
    }
]

arrayOfObj.forEach( (item)=>{
    console.log(item.lang);
})