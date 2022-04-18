import React from 'react';
import PropTypes from 'prop-types';

const Goals = props => {
    console.log(props.goals);
    return (
        <div className='goals'>
            {props.goals.map((goal) =>
                <li key={goal.id}>
                {goal.goal}
                {/* <div>{goal.goal_Deadline}</div> */}
                <button className='deleteButton'>X</button>
                </li>
            )}
        </div>
    )
}

export default Goals;