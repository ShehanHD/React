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
        setData(value)
    }

    const handleSearch = (e) => {
        let searchString = e.target.value;

        let filtered = data.map(item => {
            item.show =
                item.el_article.article_code.toUpperCase().includes(searchString.toUpperCase())
                || item.el_order.order_code.toUpperCase().includes(searchString.toUpperCase())
                || item.el_order.el_customer.business_name.toUpperCase().includes(searchString.toUpperCase())
                || item.el_order.el_customer.customer_code.toUpperCase().includes(searchString.toUpperCase());
            return item;
        });

        console.log(filtered);
        setData(filtered);
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
                    onChange={handleSearch}
                />

                <div>
                    List_order_by:
                    <Button size={'small'} className={'filter-btn'} variant={'contained'}>delivery_date</Button>
                    <Button size={'small'} className={'filter-btn'} variant={'contained'}>entrance_id</Button>
                </div>
            </div>

            <Divider className={'divider'} />
            {data && data.map(element => {
                return (element.show || element.show === undefined) && <JobCard key={element.id} data={element} />
            })}
        </>
    )
}

export default Index

export const JobCard = ({ data }) => {
    return (
        <>
            <div className={'job-card'} >
                <p>DummyCustomer - {data.el_order.el_customer.business_name}</p>
                <p>DummyArticle | {data.el_article.article_code}</p>
                <p>Requested {data.requested} + {data.additional}</p>
                <p>Order {data.el_order.order_code} of {data.el_order.order_date}</p>
                <p>Delivery_date {data.el_order.delivery_date} </p>
                <p>Estimated_end-Duration:  {data.duration || 'not specified'} </p>
                <p>Mold: {data.el_mold_version.mold_version_code} </p>

                <Button size={'small'} className={'list-btn'} variant={'contained'}><i className="fas fa-arrows-alt"></i> Drag-me </Button>
                <Button size={'small'} className={'list-btn'} variant={'contained'}><i className="fas fa-plus-circle"></i> Add</Button>
                <Button size={'small'} className={'list-btn'} variant={'contained'}><i className="fas fa-tags"></i> Mold</Button>
                <Button size={'small'} className={'list-btn'} variant={'contained'}><i className="fas fa-trash-alt"></i> Delete</Button>
                <Button size={'small'} className={'list-btn'} variant={'contained'}><i className="fas fa-eye"></i> Info</Button>

            </div>
            <Divider className={'divider'} />
        </>
    )
}
