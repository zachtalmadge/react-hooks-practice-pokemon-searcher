import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({name, hp, sprites}) {

  let [ cardView, setCardView ] = useState(true)
  
  let switchCardView = () => setCardView(cardView => !cardView)

  return (
    <Card>
      <div>
        <div onClick={switchCardView} className="image">
          <img src={cardView ? sprites.front : sprites.back} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
           {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
