import React from 'react'
import { Button } from '@material-ui/core';
import PublishIcon from '@material-ui/icons/Publish';

export default function Submit({rows}) {
    const handleSubmit = () => {
        let x = rows.map(item => {
            return {
                part: {
                    PartNumber: item.partnumber,
                    description : item.description,
                    listPrice : item.price,
                    lifeCicle : item.lifecycle,
                    KmBeforerevision : item.revision
                },
                companyName : item.company,
                categoryName : item.category,
                vehicleModel : item.model
            }
        })

        console.log(x);
    }

    return (
        <Button variant="contained" color="primary" size="large" className="submit" onClick={ handleSubmit }>
                    Submit
                    <PublishIcon />    
        </Button>
    )
}
