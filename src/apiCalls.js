import React,{useState,useEffect} from 'react'

function ApiCalls() {
          const [result,setResult] = useState([""]);
            
          useEffect(()=>{
            getResult();
          },[])

            const getResult = async () =>{

                await fetch(`https://api.odmit.com/api/v1/college-stack?course_type=on_campus&country=USA&qualification=Graduation&category=Computer%20Science%20and%20IT&page=1&limit=10&offset=0`
                )
                .then((response)=>{
                    return response.json()
                })
                .then((res)=>{
                    console.log(result)
                    setResult(res.response.result)

                    console.log(res.response.result)
                })
                .catch((err)=>{
                    console.log(err,"Network error")
                })
            }
        
    return (
        <div>
            Result is here
        </div>
    )
}

export default ApiCalls;