import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
 const Navbar = ({items}) => {
    return(
        <nav className="nav-box">
            <Link to="/" className="brand-logo">Sklep</Link>
            <Link to="/cart" className="shop-logo"><i className="fa fa-shopping-cart" aria-hidden="true"></i> Koszyk ({items.length})</Link>
        </nav>
    )
}

const mapStateToProps = (state)=>{
    return{
        items: state.items,
    }
}

export default connect(mapStateToProps,{})(Navbar)