import React,{useState} from 'react';
import data from "./data";
import Singleitem from "./Singleitem";

const Blog1 = () => {
  const [state, setstate] = useState(data)
  
  
    return (
        <section className="container py-4 py-lg-5" >
                     <div className="row justify-content-center">
                         {
                            state.map((item,index)=>{
                                 return(
                                     // < Card key={item.id} cover={item.cover} title={item.title} description={item.description} link="" />
                                    <Singleitem key={index}  cover={item.cover} description={item.description} title={item.title} link="/full" />
                                     
                                    
                       
                               
        
                                 )
                            })
                         }  
                     
                         
                     </div>
              </section>
    )
}

export default Blog1
