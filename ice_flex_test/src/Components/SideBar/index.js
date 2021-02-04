import React, { useEffect, useState } from 'react'
import { Button, Divider, TextField, Typography } from '@material-ui/core';
import '../../Styles/sidebar.scss';

const Index = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        let res = await fetch('./data/response.json')
        let value = await res.json();
        console.log(value)
        setData(value)
    }

    return (
        <>
            <Typography variant={'h5'}>Unassigned Jobs</Typography>

            <Divider className={'divider'} />

            <div className={'job-cleaner'}>
                <Button className={'job-btn'} variant={'contained'}><i className="fas fa-arrows-alt"></i>  Drag Job-Cleaner</Button>
                <Typography variant={'h6'}>Maintenance</Typography>
            </div>

            <Divider className={'divider'} />

            <div className={'search'}>
                <TextField
                    id="filled-helperText"
                    placeholder="Search_Job"
                    helperText="Enter Unique Keywords To quickly Find Your Job"
                    fullWidth={true}
                />

                <div>
                    List_order_by:
                    <Button size={'small'} className={'filter-btn'} variant={'contained'}>Drag Job-Cleaner</Button>
                    <Button size={'small'} className={'filter-btn'} variant={'contained'}>Drag Job-Cleaner</Button>
                </div>
            </div>

            <Divider className={'divider'} />
            <JobCard data={"s"} />
            {data.map(element => {
                return <JobCard key={element.id} data={element} />
            })}
        </>
    )
}

export default Index

export const JobCard = ({ data }) => {
    return (
        <>
            <div>
                <p>DummyCustomer - { }</p>
                <p>DummyArticle | { }</p>
                <p>Requested {data.requested} + {data.additional}</p>
                <p>Order { } of { }</p>
                <p>Delivery_date {data.delivery_date} </p>
                <p>Estimated_end-Duration:  {data.duration || 'not specified'} </p>
                <p>Mold: { } of </p>

                <Button size={'small'} className={'list-btn'} variant={'contained'}>Drag-me <i className="fas fa-arrows-alt"></i></Button>
                <Button size={'small'} className={'list-btn'} variant={'contained'}>add <i className="fas fa-plus-circle"></i></Button>
                <Button size={'small'} className={'list-btn'} variant={'contained'}>mold <i className="fas fa-tags"></i></Button>
                <Button size={'small'} className={'list-btn'} variant={'contained'}>delete <i className="fas fa-trash-alt"></i></Button>
                <Button size={'small'} className={'list-btn'} variant={'contained'}>info <i class="fas fa-eye"></i></Button>

            </div>
            <Divider className={'divider'} />
        </>
    )
}
