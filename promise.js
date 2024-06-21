// create promise step by step 

const { error } = require("console");

const firstPromise = new Promise(function (resolve, reject) {

    setTimeout(function () {
        console.log('task completed')
        resolve();
    }, 2000)
})

firstPromise.then(function () {
    console.log("task resolved");
})



// second and good way to create promise

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('task two is completed ');
        resolve();

    }, 3000);
}).then((function () {
    console.log('news your promise is resolveed');
}))

// 3rd promise 

new Promise(function (resolve, reject) {
    setTimeout(function () {

        resolve({ username: 'sudhir singh', email: 'sudhir@1234.com' });
    }, 4000)
}).then(function (user) {

    console.log(user);
})

// Proper handle promise 

const promiseError = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({ username: 'rama kr', password: '12323' })
        } else {
            reject(' Error: Some is wrong here data is not assigned')
        }
    }, 5000)
})
promiseError.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
})
    .catch(function (error) {
        console.log(error);
    })
    .finally(function (error) {

        console.log("the promse is eighter resolve or reject"
        )
    })


// Handle promsie using async, consume it

const Newpromise = new Promise(function (resolve, reject) {

    setTimeout(function () {
        let err = true;
        if(!err) {
            resolve({ userInfo: "javScript", password: 'json' })
        } else {

            reject('Error in js user ')
        }

        }, 5000)
})

async function consumePromise(){
    try {
        const respnse =  await Newpromise 
        console.log(respnse);
     }
        
     catch (error) {
       console.log(error); 
    }
}
consumePromise();



