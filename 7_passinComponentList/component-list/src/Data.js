import React, { Component } from 'react';

class Data extends Component {
    render() { 
        const { data } = this.props;
        const dataList = data.map(data => {
            return <div className="data" key={ data.id }>
            <p>Name: { data.name }</p>
            <p>Surname: { data.surname } </p>
        </div>
        });
        return(
            <div className="data-list">
                { dataList }
            </div>
        );
    }
}
 
export default Data;