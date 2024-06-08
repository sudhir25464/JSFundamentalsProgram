
function synchronous (){

    console.log("Syschronous function is stated");
const arr = [10,20,30,40,50,6];
    for (var i =0 ; i<arr.length; i++){
        console.log(arr[i]);
    }
    console.log("Syschronous function is ended");
}

synchronous();

function asynchronous (callback){
    console.log("Asynchronous function is stated");
    const arr = [10,20,30,40,50,6];
    for (var i =0 ; i<arr.length; i++){
        console.log(arr[i]);
    }
    console.log("Asynchronous function is ended");
    setTimeout(() => {
        console.log("End");
        callback();
      }, 1000); // Simulate an asynchronous task with setTimeout

}
asynchronous();