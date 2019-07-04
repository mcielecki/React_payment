import React from 'react';
import { connect } from 'react-redux'
const Total = ({items}) => {
    const valTotal = items.reduce((totalval, item) => totalval + item.price, 0);
    return(
        <div className="total-box">
            <p>Całkowita cena: {valTotal} zł</p>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        items: state.items,
    }
}

export default connect(mapStateToProps,{})(Total)