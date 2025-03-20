const array = [2,3,4,5,6];

array.forEach(item=>{
    if(item % 2 ===0){
        console.log(`o numero ${item} é par`);
    }else{
        console.log(`o numero ${item} é impar`);
    }

});