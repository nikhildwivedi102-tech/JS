const myobj = {
    state1 : "M.P.", 
    state2 : "Gujarat", 
    country : "India"
}
// for (const [key, val] of myobj) {   //error : object is not iterable
//     console.log(key, ":-", val);
// }

// so, the loop that can run in object is "for-in loop";
//for-in loop
for(const key in myobj){
    console.log(key ,":-", myobj[key]);
}

const programming = ["cpp", "py", "js", "java", "rb"];
for (const key in programming) {
    console.log(key);           //for-of me direct values print ho jati thi
}//to print values,
for (const key in programming) {
    console.log(programming[key]);
}
