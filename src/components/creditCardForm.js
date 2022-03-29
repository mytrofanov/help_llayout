import React from "react";
import { useForm } from "react-hook-form";

export default function CreditCardForm() {
    const { register, handleSubmit } = useForm();
    let cardNumber
    let cardNumberAsNumber
    const onSubmit = data => {
        cardNumberAsNumber = Number(data.cardNumber_fourDigit + data.cardNumber_eightDigit + data.cardNumber_twelveDigit
            +data.cardNumber_sixteenDigit)
        cardNumber = data.cardNumber_fourDigit +'-'+ data.cardNumber_eightDigit +'-'+ data.cardNumber_twelveDigit
            +'-'+data.cardNumber_sixteenDigit
        console.log('CardNumber:',cardNumber)
        console.log('CardNumber as number:',cardNumberAsNumber)
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" maxLength={4} {...register("cardNumber_fourDigit", {pattern:/\d/i})}/>
            <input type="text" maxLength={4} {...register("cardNumber_eightDigit", {pattern:/\d/i})}/>
            <input type="text" maxLength={4} {...register("cardNumber_twelveDigit", {pattern:/\d/i})}/>
            <input type="text" maxLength={4} {...register("cardNumber_sixteenDigit", {pattern:/\d/i})}/>
            <input type="submit" />
        </form>
    );
}
