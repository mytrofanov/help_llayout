import React from 'react';
import s from '../styles/paymentMethods.module.css'

const PaymentMethods = () => {
    return (
        <div className={s.paymentMethodsBlock}>
            <div className={s.paymentMethodSelect}>
                Спосіб оплати
            </div>
        </div>
    );
};

export default PaymentMethods;
