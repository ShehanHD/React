import React from 'react';

function Todos ({list, delTodo}) { 
    
    let LIST = list.length ? (
        list.map(item => {
            return(
                <div className="collection-item z-depth-5" key={item.id}>
                    <div className="" onClick={() => {delTodo(item.id)}}> { item.content } </div>
                </div>
            );
        })
    ) 
    :  (<p className="center">No TODOs</p>);

    return ( 
        <div className="container collection center">
           { LIST }
        </div>
    );
}

 
export default Todos;