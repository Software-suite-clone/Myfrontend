import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { IoMdFolderOpen } from "react-icons/io";
import "./Cards.css";

function Cards({ isSidebarOpen, openClassPage }) {
  const [createclass, setCreateclass] = useState([]);

  useEffect(() => {
    console.log("open fetch create class!!");
    const fetchCreateClass = async () => {
      try {
        const u = sessionStorage.getItem("nam");
        const response = await fetch(
          `http://localhost:8080/cclass/cc/getcreateclass/${u}`
        );
        const data = await response.json();
        setCreateclass(data);
      } catch (error) {
        console.log("error fetching user:", error);
      }
    };
    fetchCreateClass();
  }, []);

  const [joinclass, setJoinclass] = useState([]);

  useEffect(() => {
    console.log("open fetch join class!!");
    const fetchJoinClass = async () => {
      try {
        const u = sessionStorage.getItem("nam");
        const response = await fetch(
          `http://localhost:8080/jclass/getjoinclass/${u}`
        );
        const data = await response.json();
        console.log("JoinClass Data:", data);
        setJoinclass(data);
      } catch (error) {
        console.log("error fetching user:", error);
      }
    };
    fetchJoinClass();
  }, []);

  const handleCardClick = async (cardData) => {
    try {
      const response = await fetch("http://localhost:8080/allclass/postdto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cardData),
      });

      if (!response.ok) {
        throw new Error("Failed to post data");
      }

      const result = await response.json();
      console.log("Data posted successfully:", result);
      openClassPage(); // Navigate to the class page
    } catch (error) {
      console.log("Error posting data:", error);
    }
  };

  return (
    <div className={`cards-container ${isSidebarOpen ? "shifted" : ""}`}>
      {createclass.map((cc, index) => (
        <Card
          className="Cards"
          style={{ width: "18rem" }}
          key={index}
          onClick={() => handleCardClick(cc)} // Fix: Pass a function reference
        >
          <Card.Header className="cardheader">
            <Card.Title>{cc.classname}</Card.Title>
            <Card.Subtitle>{cc.section}</Card.Subtitle>
          </Card.Header>
          <Card.Body className="cardbody">
            <Card.Text>{/* Additional content can go here */}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <button className="btn1">
              <IoMdFolderOpen />
            </button>
          </Card.Footer>
        </Card>
      ))}
      {joinclass.map((jc, index) => (
        <Card
          className="Cards"
          style={{ width: "18rem" }}
          key={index}
          onClick={() => handleCardClick(jc)} // Fix: Pass a function reference
        >
          <Card.Header className="cardheader2">
            <Card.Title>{jc.classname}</Card.Title>
            <Card.Subtitle>{jc.section}</Card.Subtitle>
            <br />
            <Card.Subtitle>{jc.name}</Card.Subtitle>
          </Card.Header>
          <Card.Body className="cardbody">
            <Card.Text>{/* Additional content can go here */}</Card.Text>
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
