import React, { useEffect } from 'react';
import { Button } from 'antd';
import { BASE_CURRENCY } from '../../config';
import './CurrencyItem.css';

function CurrencyItem({ shortCode, currency, rate, count, onCurrencyRemove }) {

    return (
        <li>
            <div className="rate-info">
                <h3>
                    <span className="name">{shortCode}</span>
                    <span className="value">{rate * count}</span>
                </h3>
                <h5>
                    {shortCode} - {currency}
                </h5>
                <h4>
                    1 {BASE_CURRENCY} = {shortCode} {rate}
                </h4>
            </div>
            <div className="button-wrapper">
                <Button shape="circle" icon="minus" onClick={() => onCurrencyRemove(shortCode)} />
            </div>
        </li>
    );
}

export default CurrencyItem;
