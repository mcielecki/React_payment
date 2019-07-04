import React, { Component } from 'react';
import { connect } from 'react-redux';
import Total from './Total';
import SimpleSlider  from './SimpleSlider';
import Stepper from 'react-stepper-horizontal';
import ActualCard from './ActualCard';
import AddCard from './AddCard';


class Cart extends Component{

    state = {
        steps: [{
        title: 'Zestawienie',
        href: '/',
        onClick: (e) => {
            e.preventDefault()
            this.setState({
                currentStep: 0,
            });
        }
        }, {
        title: 'Metoda płatności',
        href: '/',
        onClick: (e) => {
            e.preventDefault()
            this.setState({
                currentStep: 1,
            });
        }
        }, {
        title: 'Podsumowanie',
        href: '/',
        onClick: (e) => {
            e.preventDefault()
            this.setState({
                currentStep: 2,
            });
        }
        },
        {
            title: 'Gotowe !',
            href: '/',
            onClick: (e) => {
                e.preventDefault()
                this.setState({
                    currentStep: 3,
                });
            }
            },
    ],
        currentStep: 0,
    };

    onClickNext = () => {
    const { currentStep } = this.state;
    this.setState({
        currentStep: currentStep + 1,
    });
}
onClickPrev = () => {
    const { currentStep } = this.state;
    if(currentStep > 0) {
        this.setState({
            currentStep: currentStep - 1,
            });
    }

}
    render(){
        const { steps, currentStep } = this.state;
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                        <li className="cart-item" key={item.id}>
                            <div className="item-img"> 
                                <img src={item.img} alt={item.title} />
                            </div>
                        
                            <div className="item-desc">
                                <p className="title">{item.title}</p>
                                <p>{item.desc}</p>
                                <p className="price">Cena: {item.price}zł</p> 
                            </div>
                        </li>
                            )
                })
            ):

             (
                <p>Twój koszyk jest pusty</p>
             )
       return(
            <div className="cart">
                <div className="stepper">
                    <Stepper steps={ steps } activeStep={ currentStep } circleFontSize={12} size={34} />
                </div>
                        
                {this.state.currentStep === 0 ? 
                <div>               
                    <h5>Zawartość twojego koszyka:</h5>
                    <ul>
                        {addedItems}
                    </ul>
                    <Total /> 
                </div> : 
                 this.state.currentStep === 1 ? 
                 <div>
                     <h5>Wybierz kartę do dokonania płatności lub dodaj nową</h5>
                     <ActualCard />
                     <SimpleSlider />
                      <AddCard />
                      </div> :
                 this.state.currentStep === 2 ? 
                 <div> 
                    <h5>Twoje podsumowanie:</h5>
                    <ul className="short-ul">
                        {addedItems}
                    </ul>
                    <ActualCard />
                    <Total /> 
                  </div> :
                 <div className="text-center"> 
                    <h3>Dziękujemy za zakupy w naszym sklepie!</h3>
                    <h4>Zapraszamy ponownie!</h4>
                  </div>
                }
                <div className="buttons">
                {this.state.currentStep !== 0 && this.state.currentStep !==3 ?
                    <div onClick={ this.onClickPrev }>Wróc</div> : ""}
                {this.state.currentStep === 2 ?
                    <div onClick={ this.onClickNext }>Zapłać i zakończ</div> :
                    this.state.currentStep !== 3 ?
                    <div onClick={ this.onClickNext }>Dalej</div> : ""}
                </div>
            </div>       
       )
    }
}


const mapStateToProps = (state)=>{
    return{
        items: state.items,
    }
}
export default connect(mapStateToProps,{})(Cart)