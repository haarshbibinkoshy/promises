let posts=[
    {title:'post one',body:`this is post one`},
    {title:`post two`,body:`this is post two`}]
    function getPosts() {
        setTimeout(() => {
            let output=``
            posts.forEach((post) => {
                output+=`<li>${post.title}</li>`
            })
            document.body.innerHTML=output
        },1000);
    }

    function updateLastActivityTime() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
                posts.map((post) =>console.log(post))
            }, 1100);
        })
    }

    function createPost(post) {
        updateLastActivityTime()
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                posts.push(post)
                const error=false
                if (!error) {
                    resolve()
                }else{
                    reject(`Error:something went wrong`)
                }
            }, 1000);
        })
    }

    createPost({title:`post three`,body:`this is post three`})
    .then(getPosts)
    .catch(err=>console.log(err))

    function deletePost() {
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
               
               
                if (posts.length) {
                    resolve()
                }else{
                    reject(`Error:Array is empty`)
                }
            }, 1000);
        })
    }
    const timerId=setInterval(() => {
        deletePost()
        .then(()=>{
            posts.pop()
            let lastPost=document.querySelector(`body`).lastChild
            lastPost.parentNode.removeChild(lastPost)
        })
        .catch((err)=>{
            console.log(err);
            clearInterval(timerId)
        })
    }, 2000);


const promise1= Promise.resolve(`hello world`)
const promise2=10
const promise3=new Promise((resolve,reject)=>
setTimeout(resolve,2000,`goodbye`))

Promise.all([promise1,promise2,promise3]).then(values=>console.log(values))