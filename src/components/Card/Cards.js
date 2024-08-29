
import Card from 'react-bootstrap/Card';
import "./Cards.css";
import { useEffect, useState } from 'react';
import { IoMdFolderOpen } from 'react-icons/io';


function Cards({ isSidebarOpen, openClassPage  }) {
    const[createclass,setCreateclass]=useState([]);
    useEffect(()=>{
        const fetchCreateClass = async () => {
            try {
              const response = await fetch("http://localhost:8080/cclass/getcreateclass");
              const data = await response.json();
              setCreateclass(data);
            } catch (error) {
              console.log("error fetching user:", error);
            }
          };
          fetchCreateClass();

    },[]);

    const handleCardClick = () => {
      openClassPage();
    };
  

  return (

    <div className={`cards-container ${isSidebarOpen ? "shifted" : ""}`}onClick={handleCardClick}>
   {createclass.map((cc)=>(
    <Card style={{ width: '18rem' }} className='card'>
        <Card.Header className='cardheader'>
        {/* <Card.Img variant="top" className='cardimg' src=""/> */}
        <Card.Title>{cc.classname}</Card.Title>
        <Card.Subtitle>{cc.section}</Card.Subtitle>
             </Card.Header>
     
      <Card.Body className='cardbody'>
         
        <Card.Text>
            <p>Assignment name</p>
        
         
        </Card.Text>
      
        
      </Card.Body>
      <Card.Footer>
      
      
    
      <button className="btn1 ">
<IoMdFolderOpen/>
</button>

      </Card.Footer>
    </Card>
    ))}
    </div>
  );
}

export default Cards;