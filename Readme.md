### Spread operator ...

This operator is used to extract the key value pairs into the props

For example id key value pair is

```javascript

{id: 'abc', type: 'text'}


```

then props should be

```html

<input id='abc' type='text' />

```

for this react code will be:

```javascript

import classes from './Input.module.css'

const Input = props =>{

    return <div className={classes.input}>

        <label htmlFor={props.input.id}>{props.label}</label>

        {/**
         
         This is a spread operator ({...props.input}), which is used to put all the key value pairs into the props for example

         if we pass {id : 'abc', type: 'text'} then output will be

         <input id='abc' type='text' />

         */}

        <input {...props.input}/>

    </div>

}

export default Input;

```

```javascript

<Input lable="Amount" input={{
            id:'amount',
            type: 'number',
            min:'1',
            max: '5',
            step: '1',
            defaultValue:'1'
            }} />

```