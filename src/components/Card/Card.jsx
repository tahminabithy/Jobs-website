import React from 'react'

function Card(props) {
    const { title, subtitle, btn, bg } = props;
    return (
        <div className={`shaodw-xl text-black ${bg} rounded-xl text-start p-6`}>
            <h3 className='text-3xl font-bold'>{title}</h3>
            <p className='mt-4 mb-6'>{subtitle}</p>
            <button className='btn'>{btn}</button>
        </div>
    )
}

export default Card
