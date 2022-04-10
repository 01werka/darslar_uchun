import React, { useRef, useState } from 'react'
import './Uy.css'

function ToDoList() {
    const ismValue = useRef();
    const familyaValue = useRef();
    const kasbValue = useRef();
    const [users,setUsers] = useState(
        [
            {   id:1,
                ism:"Yorqinjon",
                familya:"Turobjonov",
                kasb:"Dasturchi"
            },
            {   id:2,
                ism:"Sanjar",
                familya:"Haydarov",
                kasb:"Biznesmen"
            },
            {   id:1,
                ism:"Otabek",
                familya:"Ismoilov",
                kasb:"Grafik dizayner"
            },
            {   id:1,
                ism:"Samandar",
                familya:"Malikov",
                kasb:"Dasturchi"
            },
            {   id:1,
                ism:"Abdurahmon",
                familya:"Sulaymonov",
                kasb:"Oqituvchi"
            },
            {   id:1,
                ism:"Shovkat",
                familya:"Bekzodov",
                kasb:"SMM mutahissisi"
            },
            {   id:1,
                ism:"Aliakbar",
                familya:"Anvarov",
                kasb:"Frilancer"
            },
            {   id:1,
                ism:"Asadbek",
                familya:"Tursunov",
                kasb:"Java dasturchisi"
            },
            {   id:1,
                ism:"Ro'zmat",
                familya:"Aliyev",
                kasb:"Xarbiy"
            },
            {   id:1,
                ism:"Xurshid",
                familya:"Muhammadjonov",
                kasb:"Haydovchi"
            },
        ]
    
    )
    
    
    function korish() {
        
        let newUser = {
            ism:ismValue.current.value,
            familya:familyaValue.current.value,
            kasb:kasbValue.current.value,
        }
        setUsers([...users, newUser])
        
      ismValue.current.value= ''
      familyaValue.current.value= ''
      kasbValue.current.value= ''
    }


    function indexKorish(index) {   
       let a = [...users]
        a.splice(index,1)
        
        setUsers(a)
        console.log(a);
    }

    let deletingIndex

    function tahrirlash(index) {

   deletingIndex = index
        
        ismValue.current.value = users[deletingIndex].ism
        familyaValue.current.value = users[deletingIndex].familya
        kasbValue.current.value = users[deletingIndex].kasb

    }
  

    function saqlash() {
        let massiv = [...users]
        console.log(massiv[deletingIndex])
        massiv[deletingIndex].ism = ismValue.current.value
        massiv[deletingIndex].familya = familyaValue.current.value
        massiv[deletingIndex].kasb = kasbValue.current.value
        setUsers(massiv)

        ismValue.current.value= ''
      familyaValue.current.value= ''
      kasbValue.current.value= ''

}
  return (
    <div>
        <div className='Forma m-auto w-100 text-center mt-3 mb-3'>
          <input type="text" placeholder='Ism' ref={ismValue} />    
          <input type="text" placeholder='Familya'ref={familyaValue} />    
          <input type="text" placeholder='Kasb'ref={kasbValue} />    
          <button onClick={(index)=>korish(index)} className='btn btn-success'>Yangi     qo'shish</button>
          <button onClick={saqlash} className='btn btn-warning'>Tahrirlanganni qo'shish</button>
        </div>
        <div>
            <table className='table table-dark w-100 m-auto'>
                <thead>
                    <tr>
                    <th>No</th>    
                    <th>Ism</th>    
                    <th>Familya</th>    
                    <th>Kasb</th>    
                    <th>O'chirish</th>
                    <th>Tahrirlash</th>    
                    </tr>
                </thead>
               
                <tbody>  
                {
                    
                   users.map((element,index) => {
                    return(
                            <tr key={index}>
                                <td>{index+1}</td>    
                                <td>{element.ism}</td>    
                                <td>{element.familya}</td>    
                                <td>{element.kasb}</td>    
                                <td><button className='btn btn-danger' onClick={()=>indexKorish(index)}>Delete</button></td>    
                                <td><button className='btn btn-warning' onClick={()=>tahrirlash(index)}>Edit</button></td>    
                            </tr>  
                           ) 
                    })
                }
                </tbody>
            
            </table>
        </div>
    </div>
  )
}

export default ToDoList




