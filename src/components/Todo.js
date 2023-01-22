import React, { useState,useEffect} from 'react'
function Todo(){
    const  [activity,setActivity]=useState("");
    const [list ,setList]=useState([]);

    function Additem(){
        list.push(activity);
setList(list);
console.log(list);
localStorage.setItem('lists',JSON.stringify(list));
setActivity('');
    }
    function DeleteItem(id){
       var newlist = list.filter((element)=>!list[id].includes(element));
       console.log(newlist)
        setList(newlist);
        localStorage.setItem('lists',JSON.stringify(newlist));
    }
    function DeleteAll(){
        setList([]);
        localStorage.removeItem('lists');
    }
    useEffect( 
        ()=>{
            if(localStorage.getItem('lists'))
            setList(JSON.parse(localStorage.getItem('lists')))
        },[]
    )

    return (
        <div className='parent-todo container-fluid col-11'>
           
        <div className="todo img-fluid ">
        <img src="https://media.istockphoto.com/id/1328507962/photo/digital-background-with-moving-glowing-particles-futuristic-hi-tech-illustration-concept-of.jpg?b=1&s=170667a&w=0&k=20&c=uls-KlsHZ3fTNEQBznANnYIOE1zmBGubnu4ZVHyw3fQ="></img>
        <div className="abc">
       <div className="activity mx-2"> <h1>TODO-LIST</h1>
    <input className="input" type="text" placeholder='Add activities' value={activity} onChange={(e)=>
        setActivity(e.target.value)}/>
    <button className="buton"onClick={Additem}>Add</button>
    </div>
      <div className="list">
        <p>Your list</p>
        
        {list.length >0 ? list.map((data,i)=>{
            return(
                <p>
                    <div className="data">
                    {i+1 }. { data}</div>
                   <button className='btn' onClick={()=>{DeleteItem(i)}}>  Delete</button>
                </p>
                
           )
        }):''}
        {list.length>0?<button  className='btn' onClick={()=>DeleteAll()}>DELETE ALL</button>:'no list add some '}
             </div> 
    </div>
    </div>
        </div>
    )

}
export default Todo;