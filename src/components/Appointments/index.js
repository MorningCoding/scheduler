import React, { Fragment } from 'react';

import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import Form from './Form';
import Status from './Status';
import Confirm from './Confirm';
import Error from './Error';

import classNames from "classnames";
//import "/styles.scss";

export default function Appointment(props){
    return (
        <article className="appointment">
            <Header time={time}/>
            {props.interview? (<Show student={props.interview.student} interviewer={props.interview.interviewer}/>) : (<Empty/>)}
        </article>
    )
}