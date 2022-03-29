import React from 'react';
import s from '../styles/individualForm.module.css'
import PanToolOutlinedIcon from '@mui/icons-material/PanToolOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import clothes from '../img/clothes.svg'
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';

export const HelpType = ({setHelpType}) => {

    return (
        <div className={s.helpTypeBlock}>
                <div>
                    <h1>Види допомоги</h1>
                    <h5>Ви можете змінити тип допомоги</h5>
                    <div className={s.helpTypeSelect}>
                        <div className={s.helpType} onClick={()=>{setHelpType('Зробити')}}>
                            <PanToolOutlinedIcon  sx={{marginTop: '5%', fontSize: 65}}/>
                            <div className={s.helpTypeText} >
                               <h3>Зробити</h3>
                                <div className={s.tabSelect}> Tab select </div>
                            </div>
                        </div>
                        <div className={s.helpType} onClick={()=>{setHelpType('Фінансова допомога')}}>
                            <AccountBalanceWalletOutlinedIcon  sx={{marginTop: '5%', fontSize: 65}}/>
                            <div className={s.helpTypeText}>
                               <h4>Фінансова допомога</h4>
                                <div className={s.tabSelect}> Tab  </div>
                            </div>
                        </div>
                        <div className={s.helpType} onClick={()=>{setHelpType('Матеріальна допомога')}}>
                            <img src={clothes} alt="Матеріальна допомога" className={s.clothesImg}/>
                            <div className={s.helpTypeText}>
                               <h4>Матеріальна допомога</h4>
                                <div className={s.tabSelect}> Tab  </div>
                            </div>
                        </div>
                        <div className={s.helpType} onClick={()=>{setHelpType('Волонтерство')}}>
                            <VolunteerActivismOutlinedIcon  sx={{marginTop: '5%', fontSize: 65}}/>
                            <div className={s.helpTypeText}>
                               <h3>Волонтерство</h3>
                                <div className={s.tabSelect}> Tab select </div>
                            </div>
                        </div>
                    <div/>
                </div>
                </div>
        </div>
    );
};


