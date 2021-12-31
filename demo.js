const demo = [0,1,2,3,4]
// const arr = [1,3,5,7,9];


const name = 4

const value = demo.filter( function(x){
    return x === name
})
console.log(value)
if(value.length){
    console.log("true")
}else{
    console.log("false")
}
