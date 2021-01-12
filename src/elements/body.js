import React from 'react';

import Logo from '../assets/images/logo.png'
import EditIcon from '../assets/icons/edit.svg'

export const Body = (props) => {
    const { data } = props
    return (
        <div className="body-container">
            <img src={Logo} />
            <div className="greeting" style={{ backgroundColor: 'white' }}>
                <h1>
                    Good Morning, Dr. Brown
              </h1>
                <h2>
                    You have 5 appointments today
              </h2>
            </div>

            <div className="appointments">
                <h1>
                    My Appointments
              </h1>

                <div className="scroller">
                    <div className="header">
                        <div className="flex">
                            <p>Name</p>
                        </div>
                        <div className="flex">
                            <p>Location</p>
                        </div>
                        <div className="flex">
                            <p>Date</p>
                        </div>
                        <div className="flex">
                            <p>Time</p>
                        </div>
                        <div className="flex">
                            <p>Edit</p>
                        </div>
                    </div>

                    {data.map((item, index) => {
                        return (
                            <Item data={item} />
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

const Item = ({ data }) => {
    const { name, location, date, } = data
    return (
        <div className="scroll-item">

            <div className="flex">
                <p>{name}</p>
            </div>
            <div className="flex" >
                <p>{location}</p>
            </div>
            <div className="flex">
                <p>{'Tuesday'}</p>
            </div>
            <div className="flex">
                <p>{'11:00am'}</p>
            </div>
            <div className="flex" onClick={() => alert('heello')}>
                <img src={EditIcon} />
            </div>
        </div>
    )
}
