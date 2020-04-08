import React from 'react';

function Data({data, delData}) {             // we can destructur just doing this ---->   Data({data}) == const { data } = props;
        //const { data } = props;
        const dataList = data.map(data => {
            if( data.age < 30){
                return (<div className="data" key={ data.id }>
                    <p>Name: { data.name }</p>
                    <p>Surname: { data.surname } </p>
                    <p>Age: { data.age } </p>
                    <button onClick={ () => {delData(data.id)} }>Delete</button>
                </div>);
            }    
            else{
                return (<div className="data data-red" key={ data.id }>
                    <p>Name: { data.name }</p>
                    <p>Surname: { data.surname } </p>
                    <p>Age: { data.age } </p>
                    <button onClick={ () => {delData(data.id)} }>Delete</button>
                </div>);
            }
        });
        return(
            <div className="data-list">
                { dataList }
            </div>
        );
}
 
export default Data;