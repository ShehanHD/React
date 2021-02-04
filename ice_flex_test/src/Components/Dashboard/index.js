import React from 'react'
import Typography from '@material-ui/core/Typography'
import '../../Styles/dashboard.scss'

function Index() {
    return (
        <div className={'dashboard'}>
            <Typography variant="h3" color="initial">Dashboard</Typography>

            <DashboardCard />
            <DashboardCard />
            <DashboardCard />
        </div>
    )
}

export default Index



export function DashboardCard() {
    return (
        <div class="details">
            <div class="cards">
                <div class="card">
                    <img src="https://5.imimg.com/data5/HD/FA/MY-2696591/paver-block-making-machine-500x500.jpg" alt="" />
                    <div className="prog-bar">
                        <div className="yellow"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

