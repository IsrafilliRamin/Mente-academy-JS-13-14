


/* let students = [
    {name:"Leman", yas:21},
    {name:"Samir", yas:25},
    {name:"Mirkamil", yas:23}
]


let ul = document.createElement("ul");
document.body.appendChild(ul);

function func1(){
    let newStudent = "";
    setTimeout(()=>{
        students.forEach((student)=>{
           newStudent += `<li>${student.name}</li>`
        })
        ul.innerHTML =  newStudent
    },2000);
   
};
 */


/* callback formasi ile aradan qaldirmaq  */


/*  function func2(newObj){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            students.push(newObj);
          let loading = false;

          if(!loading){
            resolve()
          }else{
            reject("Xeta bas verdi");
          }
           
        },3000)
    })
    
 }

func2({name:"Xakizer",yas:27})
.then(response=>{
    func1()
}).catch((err)=>{
    console.log(err)
})
 */


/* Promise soz vermek */


   /*  new Promise((resolve,reject)=>{

        resolve("Data Ugurlu gelid")
      
        reject("Data Ugurusuz geldi")


    }).then(resolve=>{
        console.log("Data tam geldi");
    }).catch((err)=>{
        console.log(err);
    }) */

    fetch("data.json").then(response=>response.json()).then(data=>{
        function func1(){
            let newStudent = "";
            setTimeout(()=>{
                data.forEach((student)=>{
                   newStudent += `<li>${student.name}</li>`
                })
                ul.innerHTML =  newStudent
            },2000);
           
        };

        func1()
    }).catch((err)=>{
        console.log(err)
    })

    let ul = document.createElement("ul");
document.body.appendChild(ul);



fetch("https://fakestoreapi.com/products")
.then(resp=>resp.json()).then(data=>{
    console.log(data);
     data.forEach((item)=>{
        console.log(item.id);
     })
})



