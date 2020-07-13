import React from 'react';

const Dashboard = () => {
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }
    
    const images = importAll(require.context('../../media', false, '/\.png/'));
    

    return ( 
        <div className="col s12 m6 l4 xl2">
            <div className="card">
                <div className="card-image">
                    <span className="reparto">reparto</span>
                    <img src={images['0.png']} alt="" />
                    <span className="card-title">Book Title</span>
                    <a href="" className="btn-floating indigo halfway-fab">
                        <i className="material-icons">add_shopping_cart</i>
                    </a>
                </div>
                <div className="card-content">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="card-action center">
                    <span>PRICE: $30.00</span>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;