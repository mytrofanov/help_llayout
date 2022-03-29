import React from "react";
import { useForm } from "react-hook-form";

export default function CreditCardForm() {
    const { register, handleSubmit } = useForm();
    let cardNumber
    let cardNumberAsNumber
    let cardExp
    const onSubmit = data => {
        cardNumberAsNumber = Number(data.cardNumber_fourDigit + data.cardNumber_eightDigit + data.cardNumber_twelveDigit
            +data.cardNumber_sixteenDigit)
        cardNumber = data.cardNumber_fourDigit +'-'+ data.cardNumber_eightDigit +'-'+ data.cardNumber_twelveDigit
            +'-'+data.cardNumber_sixteenDigit
        cardExp = data.card_month_exp + '/' + data.card_year_exp
        console.log('CardNumber:',cardNumber)
        console.log('CardNumber as number:',cardNumberAsNumber)
        console.log('Card exp: ',cardExp)
        console.log('Card CVV: ',data.cvv)
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" maxLength={4} {...register("cardNumber_fourDigit", {pattern:/\d/i})}/>
            <input type="text" maxLength={4} {...register("cardNumber_eightDigit", {pattern:/\d/i})}/>
            <input type="text" maxLength={4} {...register("cardNumber_twelveDigit", {pattern:/\d/i})}/>
            <input type="text" maxLength={4} {...register("cardNumber_sixteenDigit",
                {pattern:/\d/i})}/>
            <input type="text" aria-label={'month of exp'}
                   maxLength={2}
                   {...register("card_month_exp",
                       {pattern:/\d/i})}/>
            <input type="text" aria-label={'year of exp'}
                   maxLength={2}
                   {...register("card_year_exp",
                       {pattern:/\d/i})}/>
            <input type="password" aria-label={'cvv'}
                   maxLength={3}
                   {...register("cvv",
                       {pattern:/\d/i})}/>
            <input type="submit" />
        </form>
    );
}
