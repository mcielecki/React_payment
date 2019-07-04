import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from './actions/cartActions';
import { handleActive } from './actions/cartActions'

import ItemVisa from '../images/visa.png';
import ItemMaster from '../images/master.png';
const formData = {id: null, cvv: null, number: null, expired:null, name: null, imgvisa:ItemVisa, imgmaster:ItemMaster, active: true};
class AddCard extends Component {

state = {
    cardNumber: '',
    cardCvv: '',
    cardExp: '',
    cardName: '',
    fakeId: 3,

    errorcardNumber : false,
    errorcardCvv : false,
    errorcardExp : false,

}
handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
      this.setState({
        [name]: value
      })

  }
  numberVal = () => {
      const cardNum = this.state.cardNumber.replace(/ /g,'');
      if(cardNum.match(/^[0-9]{16}$/)) {
        this.setState({
            errorcardNumber : false,
          })
      }
      else {
        this.setState({
            errorcardNumber : true,
          }) 
      }
  }

cvvVal = () => {
    if(this.state.cardCvv.match(/^[0-9]{3,4}$/)) {
      this.setState({
          errorcardCvv : false,
        })
    }
    else {
      this.setState({
          errorcardCvv : true,
        }) 
    }
}

expVal = () => {
    if(this.state.cardExp.match(/^\d{2}\/\d{2}$/)) {
      this.setState({
          errorcardExp : false,
        })
    }
    else {
      this.setState({
        errorcardExp : true,
        }) 
    }
}

handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.errorcardNumber === false && this.state.errorcardCvv === false && this.state.errorcardExp === false && this.state.cardNumber != "" && this.state.cardCvv != "" && this.state.cardExp != "" && this.state.cardName != "") {
        alert('Karta została dodana');
        formData.cvv = this.state.cardCvv;
        formData.number = this.state.cardNumber;
        formData.expired = this.state.cardExp;
        formData.name = this.state.cardName;
        formData.id = this.state.fakeId;
        this.props.addCard(formData);
        this.props.handleActive(formData.id);

        this.setState(prevState =>({
            cardNumber: '',
            cardCvv: '',
            cardExp: '',
            cardName: '',
            fakeId: prevState.fakeId + 1
          }))


    }
    else {
        alert('Proszę wypełnić poprawnie wszystkie pola');
    }
};

  render() {

    return (
        <div>
            <div className="active-card-box">
                Panel dodawania nowej karty
            </div>
            <form onSubmit={this.handleSubmit} noValidate>
                <div className="form-group">
                    <label htmlFor="card-number">Numer karty</label>
                    <input className="form-control" id="card-number" placeholder="Podaj numer karty" name="cardNumber" value={this.state.cardNumber} onChange={this.handleChange} onBlur={this.numberVal} />
                    {this.state.errorcardNumber ? 
                    <small className="form-text text-danger">Długość numeru karty jest nieprawidłowa</small> : "" }
                </div>

                <div className="form-group">
                    <label htmlFor="card-cvv">Kod CVV</label>
                    <input className="form-control" id="card-cvv" placeholder="Podaj kod cvv" name="cardCvv" value={this.state.cardCvv} onChange={this.handleChange} onBlur={this.cvvVal}/>
                    {this.state.errorcardCvv ? 
                    <small className="form-text text-danger">Długość numeru cvv jest nieprawidłowa</small> : "" }
                </div>

                <div className="form-group">
                    <label htmlFor="card-exp">Data ważności (MM/RR)</label>
                    <input className="form-control" id="card-exp" placeholder="Podaj datę ważności karty" name="cardExp" value={this.state.cardExp} onChange={this.handleChange} onBlur={this.expVal}/>
                    {this.state.errorcardExp ? 
                    <small className="form-text text-danger">Format daty jest nieprawidłowy</small> : "" }
                </div>

                <div className="form-group">
                    <label htmlFor="card-name">Nazwa karty</label>
                    <input className="form-control" id="card-name" placeholder="Podaj nazwę karty" name="cardName" value={this.state.cardName} onChange={this.handleChange} />
                </div>

                <div className="buttons">
                    <button type="submit">Dodaj kartę</button>
                </div>
            </form>
        </div>
    );
  }
}

const mapStateToProps = (state)=>{
    return{
        cards: state.cards,
    }
}

const mapDispatchToProps = dispatch => ({
    addCard: (id)=>{dispatch(addCard(id))},
    handleActive: (id)=>{dispatch(handleActive(id))},
  })

export default connect(mapStateToProps,mapDispatchToProps)(AddCard)