import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = props => {

    const amountInputRef = useRef();
    const [amountIsValid, setAmountIsValid] = useState(true);


    const submitHandler = event =>{
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const entereAmountNumber = +enteredAmount;

        if(enteredAmount.trim().lenght===0 || entereAmountNumber<1 || entereAmountNumber>5){
            setAmountIsValid(false);
            return
        }

        props.onAddToCart(entereAmountNumber);
    }

    return <form className={classes.form} onSubmit={submitHandler}>
        <Input 
            ref={amountInputRef}
        label="Amount" input={{
            id:'amount_'+props.id,
            type: 'number',
            min:'1',
            max: '5',
            step: '1',
            defaultValue:'1'
            }} />
        <button>+ Add</button>
        {!amountIsValid && <p>Please enter valid amount</p>}
    </form>
};

export default MealItemForm;