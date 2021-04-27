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
            "Paris (nicknamed the 'City of light') is the capital city of France, and the largest city in France. ... Paris is also the center of French economy, politics, traffic and culture."
          }
          src={
            "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg"
          }
        />
        <Card
          title={"Paris"}
          description={
            "Paris (nicknamed the 'City of light') is the capital city of France, and the largest city in France. ... Paris is also the center of French economy, politics, traffic and culture."
          }
          src={
            "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg"
          }
        />
        <Card
          title={"Paris"}
          description={
            "Paris (nicknamed the 'City of light') is the capital city of France, and the largest city in France. ... Paris is also the center of French economy, politics, traffic and culture."
          }
          src={
            "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg"
          }
        />
      </div>
      <div className="home__section">
        <Card
          title={"Paris"}
          description={
            "Paris (nicknamed the 'City of light') is the capital city of France, and the largest city in France. ... Paris is also the center of French economy, politics, traffic and culture."
          }
          src={
            "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg"
          }
          price={"$50.00"}
        />
        <Card
          title={"Paris"}
          description={
            "Paris (nicknamed the 'City of light') is the capital city of France, and the largest city in France. ... Paris is also the center of French economy, politics, traffic and culture."
          }
          src={
            "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg"
          }
          price={"$150.00"}
        />
        <Card
           title={"Paris"}
           description={
             "Paris (nicknamed the 'City of light') is the capital city of France, and the largest city in France. ... Paris is also the center of French economy, politics, traffic and culture."
           }
           src={
             "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg"
           }
          price={"$250.00"}
        />
      </div>
    </div>
  );
}

export default Home;
