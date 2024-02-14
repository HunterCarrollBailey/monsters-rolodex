// Components are created using the jsx file convention.
import { Component } from "react";
import './card-list.styles.css';
import Card from "../card/card.component";

class CardList extends Component {
    render() {
        const { monsters } = this.props; // We want to destructure this; so we can use it at anytime in other places.
        return (
          <div className='card-list'>
              {monsters.map((monster) => {
                  return (
                    <Card monster={monster} />
                  )
              })}
          </div>
        );
    }
}

export default CardList;
// exporting allows other files to import the code written in this file.