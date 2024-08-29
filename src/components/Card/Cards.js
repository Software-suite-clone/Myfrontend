import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import "./Cards.css";
import { IoMdFolderOpen } from 'react-icons/io';

function Cards({ isSidebarOpen, openClassPage }) {
  const [createclass, setCreateclass] = useState([]);

  useEffect(() => {
    const fetchCreateClass = async () => {
      try {
        const u = sessionStorage.getItem('nam');
        const response = await fetch(`http://localhost:8080/cclass/cc/getcreateclass/${u}`);
        const data = await response.json();
        setCreateclass(data);
      } catch (error) {
        console.log("error fetching user:", error);
      }
    };
    fetchCreateClass();
  }, []);
  

  const handleCardClick = () => {
    openClassPage();
  };

  return (
    <div className={`cards-container ${isSidebarOpen ? "shifted" : ""}`} onClick={handleCardClick}>
      {createclass.map((cc) => (
        <Card className='Cards' style={{ width: '18rem' }} key={cc}>
          <Card.Header className='cardheader'>
            <Card.Title>{cc.classname}</Card.Title>
            <Card.Subtitle>{cc.section}</Card.Subtitle>
          </Card.Header>
          <Card.Body className='cardbody'>
            <Card.Text>
              {/* Additional content can go here */}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <button className="btn1">
              <IoMdFolderOpen />
            </button>
          </Card.Footer>
        </Card>
      ))}
    </div>
  );
}

export default Cards;
