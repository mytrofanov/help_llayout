import React from 'react';
import s from '../styles/paymentMethods.module.css'
import visa from '../img/294654_visa_icon.svg'
import mastercard from '../img/mastercard_icon.svg'
import atm from '../img/atm.svg'
import webmoney from '../img/webmoney.svg'
import paypal from '../img/paypal.svg'
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import {BootstrapInput} from "./customizedInputs";
import CreditCardForm from "./creditCardForm";

const PaymentMethods = () => {
    return (
        <div className={s.paymentMethodsBlock}>
            <div className={s.paymentMethodSelect}>
                <div className={s.paymentMethodsLeft}>
                    <div className={s.paymentMethodsHeader}>Спосіб оплати</div>
                    <div className={s.paymentMethodsPict}>
                        <div className={s.creditCardPict}>
                            <div className={s.cardsLogo}>
                                <img src={mastercard} alt="MasterCard logo" className={s.visa}/>
                                <img src={visa} alt="Visa logo" className={s.visa}/>
                            </div>
                            <div className={s.cardName}>
                                Карта Visa/Mastercard
                            </div>
                        </div>
                        <div className={s.creditCardPict}>
                            <div className={s.privatLogo}>
                                Приват24
                            </div>
                            <div className={s.cardName}>
                                Приват24
                            </div>
                        </div>
                        <div className={s.creditCardPict}>
                            <div className={s.cardsLogo}>
                                <img src={atm} alt="Terminals in Ukraine" className={s.terminalLogo}/>
                            </div>
                            <div className={s.cardName}>
                                Термінали України
                            </div>
                        </div>
                        <div className={s.creditCardPict}>
                            <div className={s.cardsLogo}>
                                <img src={webmoney} alt="MasterCard logo" className={s.webmoneyLogo}/>
                            </div>
                            <div className={s.cardName}>
                                Webmoney
                            </div>
                        </div>
                        <div className={s.creditCardPict}>
                            <div className={s.cardsLogo}>
                                <img src={paypal} alt="MasterCard logo" className={s.webmoneyLogo}/>
                            </div>
                            <div className={s.cardName}>
                                Paypal
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.paymentMethodsRight}>
                    <div className={s.paymentMethodsHeader}>Введіть наступні дані:</div>
                    <div className={s.creditCardForm}>
                        <div className={s.cardNumber}>


                                  <CreditCardForm/>
                        </div>
                        <div className={s.cardExpireDate}> 10/20 </div>
                        <div className={s.cardCvvCode}> 123     </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PaymentMethods;
