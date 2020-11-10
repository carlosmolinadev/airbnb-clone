import React from "react";
import "./App.css";
import Banner from "./Banner";
import Card from "./Card";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          title={"Paris"}
          description={
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna."
          }
          src={
            "https://cdn.pixabay.com/photo/2016/03/09/09/45/paris-1245970_960_720.jpg"
          }
        />
        <Card
          title={"Paris"}
          description={
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna."
          }
          src={
            "https://cdn.pixabay.com/photo/2016/03/09/09/45/paris-1245970_960_720.jpg"
          }
        />
        <Card
          title={"Paris"}
          description={
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna."
          }
          src={
            "https://cdn.pixabay.com/photo/2016/03/09/09/45/paris-1245970_960_720.jpg"
          }
        />
      </div>
      <div className="home__section">
        <Card
          title={"Paris"}
          description={
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna."
          }
          src={
            "https://cdn.pixabay.com/photo/2016/03/09/09/45/paris-1245970_960_720.jpg"
          }
          price={"$50.00"}
        />
        <Card
          title={"Paris"}
          description={
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna."
          }
          src={
            "https://cdn.pixabay.com/photo/2016/03/09/09/45/paris-1245970_960_720.jpg"
          }
          price={"$150.00"}
        />
        <Card
          title={"Paris"}
          description={
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna."
          }
          src={
            "https://cdn.pixabay.com/photo/2016/03/09/09/45/paris-1245970_960_720.jpg"
          }
          price={"$250.00"}
        />
      </div>
    </div>
  );
}

export default Home;
