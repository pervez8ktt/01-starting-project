import React from 'react';
import classes from './Input.module.css'

const Input = React.forwardRef( (props,ref) =>{

    return <div className={classes.input}>

        <label htmlFor={props.input.id}>{props.label}</label>

        {/**
         
         This is a spread operator ({...props.input}), which is used to put all the key value pairs into the props for example

         if we pass {id : 'abc', type: 'text'} then output will be

         <input id='abc' type='text' />

         */}

        <input ref={ref} {...props.input}/>

    </div>

})

export default Input;