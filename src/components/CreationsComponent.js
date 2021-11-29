import React from "react";
import data from "../data/data-mobile";

const CreationsComponent = () => {
  const [cards, setCards] = React.useState(data);
  return (
    <section className="creations-mobile">
      <h1>our creations</h1>
      <section>
        {cards.map((card) => {
          const { id, image, title } = card;
          return (
            <article key={id}>
              <div>
                <img src={image} alt="" />
              </div>
              <h2>{title}</h2>
            </article>
          );
        })}
      </section>
      <div className="btn-container">
        <button className="btn">see all</button>
      </div>
    </section>
  );
};

export default CreationsComponent;
