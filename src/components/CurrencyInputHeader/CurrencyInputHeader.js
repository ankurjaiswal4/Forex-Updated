import React from 'react';
import { BASE_CURRENCY, CURRENCY_DATA } from '../../config';
import { Input } from 'antd';
import './CurrencyInputHeader.css';

function CurrencyInputHeader({ amount, onCurrencyAmountUpdate }) {
    return (

        <header className='header'>
            <h5>
                {BASE_CURRENCY} - {CURRENCY_DATA[BASE_CURRENCY]}
            </h5>
            <Input type="number" addonBefore={BASE_CURRENCY} defaultValue={amount} onChange={onCurrencyAmountUpdate} onPressEnter={onCurrencyAmountUpdate} />
        </header>
    )
}

export default CurrencyInputHeader;