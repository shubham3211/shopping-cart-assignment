import React from 'react'

let closedShoppingcartStyle = {
  position: 'absolute',
  top: '0px',
  right: 0,
  backgroundColor: '#1b1a20',
  width: '60px',
  height: '60px',
  textAlign: 'center',
  paddingTop: '12px',
  boxSizing: 'border-box'
}

let quantityStyle = {
  bottom: '5px',
  right: '7px',
  color: '#0c0b10',
  position: 'absolute', 
  backgroundColor: '#eabf00',
  borderRadius: '50%',
  textAlign: 'center',
  fontWeight: '700',
  fontSize: '.8em',
  lineHeight: '18px',
  width: '18px',
  height: '18px'
}

const CloseCart = ({productCount, setState}) => {
  return ( 
    <div onClick={() => setState(true)} style={closedShoppingcartStyle}>
      <img src={require("../static/bag-icon.png")} alt=""/>
      <div style={quantityStyle}>
        {productCount}
      </div>
    </div>
  );
}
 
export default CloseCart;