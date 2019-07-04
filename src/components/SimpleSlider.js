import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import { handleActive } from './actions/cartActions'
 
class SimpleSlider extends Component {
  handleActive = (id)=>{
    this.props.handleActive(id);
}
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: 'card-box'
    };
    let addedCards =  this.props.cards.map((card,index)=>{
            return(
                <div className="card-box" key={index}>
                  <div className="card-body">
                    <p className="card-number">{card.number}</p>
                    <p className="card-expired">{card.expired}</p>
                    <p className="card-name">{card.name}</p>
                    {card.number.charAt(0) == 4 ?
                      <img className="card-img" src={card.imgvisa} alt={card.number} /> :
                      card.number.charAt(0) == 5 ?
                    <img className="card-img" src={card.imgmaster} alt={card.number} /> : ""}
                    {card.active === false ?
                    <button className="card-btn" onClick={()=>{this.handleActive(card.id)}}>aktywuj</button> : ""}
                  </div>
                </div>
                    )
        })
    return (
      <Slider {...settings}>
        {addedCards}
      </Slider>
    );
  }
}

const mapStateToProps = (state)=>{
    return{
        cards: state.cards,
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
      handleActive: (id)=>{dispatch(handleActive(id))},
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SimpleSlider)