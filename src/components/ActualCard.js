import React, { Component } from 'react';
import { connect } from 'react-redux';
 
class ActualCard extends Component {

  render() {
    const activeCard =  this.props.cards.filter(card=> card.active === true)
    return (
        <div className="active-card-box">
            Numer wybranej karty do dokonania płatności to: <b>{activeCard[0].number}</b>
        </div>
    );
  }
}

const mapStateToProps = (state)=>{
    return{
        cards: state.cards,
    }
}

export default connect(mapStateToProps,{})(ActualCard)