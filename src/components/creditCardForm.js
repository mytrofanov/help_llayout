import React from "react";
import { useForm } from "react-hook-form";
import s from '../styles/creditCardForm.module.css'

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
            <label htmlFor="Номер карти" className={s.cardLabel}>Номер карти</label>
            <div className={s.cardNumberBlock}>

                <input type="text" className={s.cardNumber}
                       id={"cardNumber_fourDigit"}
                       maxLength={4} {...register("cardNumber_fourDigit", {pattern:/\d/i})}/>
                <input type="text" className={s.cardNumber}
                       id={"cardNumber_eightDigit"}
                       maxLength={4} {...register("cardNumber_eightDigit", {pattern:/\d/i})}/>
                <input
                    id={"cardNumber_twelveDigit"} className={s.cardNumber}
                    type="text" maxLength={4} {...register("cardNumber_twelveDigit", {pattern:/\d/i})}/>
                <input
                    id={"cardNumber_sixteenDigit"} className={s.cardNumber}
                    type="text" maxLength={4} {...register("cardNumber_sixteenDigit",
                    {pattern:/\d/i})}/>
            </div>
            <div className={s.cardExp}>
                <input type="text" aria-label={'month of exp'}
                       id={"card_month_exp"}
                       maxLength={2}
                       {...register("card_month_exp",
                           {pattern:/\d/i})}/>
                <span className={s.expDevider}>/</span>
                <input type="text" aria-label={'year of exp'}
                       id={"card_year_exp"}
                       maxLength={2}
                       {...register("card_year_exp",
                           {pattern:/\d/i})}/>
            </div>
            <div className={s.cvv}>
                <input type="password" aria-label={'cvv'}
                       id={"cvv"}
                       maxLength={3}
                       {...register("cvv",
                           {pattern:/\d/i})}/>
            </div>


            <input
                id={"submit_card_info"}
                type="submit" />
        </form>
    );
}
