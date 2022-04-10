import React from 'react'

function Test14() {

//    function test01(){
//        for(let i=0; i<100000; i++)
//        console.log("test ishladi")
//    }
//    function test02(){
//        for(let i=0; i<100000; i++)
//        console.log("test2 ishladi")
//    }
// const a1 = new Promise(test01)

function test1(){
    const a= new Promise((resoult,reject)=>{
        for(let i=0;i<1000000;i++){}
        resoult()
    })

    a.then(()=>{})
}
    return (
        <div>

        </div>
    )
}



export default Test14
