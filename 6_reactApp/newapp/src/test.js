import React, {Component} from 'react';

class Test extends Component{  
    render(){   
        //console.log(this.props);   
        const { name, surname } = this.props    //destrcturing
        return (   
            <div className="test">
                {/* //<p>name : { this.props.name }</p>
                //<p>surname : { this.props.surname }</p> */}
                <p> name : { name }</p>
                <p> surname : { surname }</p>
            </div>
        )
    }
}
 
export default Test;
