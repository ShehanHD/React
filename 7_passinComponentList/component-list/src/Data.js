import React from 'react';

function Data(props) {             // we can destructur just doing this ---->   Data({data}) == const { data } = props;
        const { data } = props;
        const dataList = data.map(data => {
            if( data.age < 30){
                return (<div className="data" key={ data.id }>
                <p>Name: { data.name }</p>
                <p>Surname: { data.surname } </p>
                </div>);
            }    
            else{
                return null;
            }
        });
        return(
            <div className="data-list">
                { dataList }
            </div>
        );
}
 
export default Data;