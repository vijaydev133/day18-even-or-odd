function evenOrOdd(x){
    let checker = false
    if(x % 2 == 0){
        checker = true
    }
    return checker
}

if(evenOrOdd(1)){
    console.log("even");
}
else{
    console.log("odd");
}