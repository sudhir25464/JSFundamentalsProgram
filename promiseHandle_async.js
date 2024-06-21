
// On the Way promise
// async function getAlluser(){
//     try {
//         const responce = await fetch('https://github.com/users/sudhir25464')

const { error } = require("console");

        
//         // const data = await responce.json();
//         console.log(responce);

//     } catch (error) {
//         console.log(error);
//     }
//  }

// getAlluser();


fetch('https://github.com/users/sudhir25464')

.then((responce)=>{
    return responce
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})