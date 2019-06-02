import React, { useState, useEffect } from 'react';
import CurrencyInputHeader from './components/CurrencyInputHeader/CurrencyInputHeader';
import AddCurrency from './components/AddCurrency/AddCurrency';
import CurrencyItem from './components/CurrencyItem/CurrencyItem';
import logo from './logo.svg';
import './App.css';
import { BASE_CURRENCY, FOREX_API, CURRENCY_DATA } from './config';

function App() {

  const [rates, setRates] = useState({});
  const [addedCurrency, setAddedCurrency] = useState({});
  const [currencyAmount, setCurrencyAmount] = useState('1');

  if (Object.entries(rates).length == 0) {
    console.log(rates);
    fetch(FOREX_API + '?base=' + BASE_CURRENCY + '&symbols=' + Object.keys(CURRENCY_DATA))
      .then(response => response.json())
      .then(jsonResponse => {
        console.log(jsonResponse.rates);
        setRates(jsonResponse.rates);
      });

  }

  const onCurrencyAmountUpdate = e => {
    setCurrencyAmount(e.target.value);
  }

  const onCurrencyAdd = shortCode => {
    if (addedCurrency.hasOwnProperty(shortCode)) {
      alert('Already there!!');
      return;
    }
    else if (rates.hasOwnProperty(shortCode)) {
      setAddedCurrency({ ...addedCurrency, [shortCode]: rates[shortCode] });
    }
    else {
      alert('Select a currency!!');
    }
  }

  const onCurrencyRemove = shortCode => {
    delete addedCurrency[shortCode];
    setAddedCurrency({ ...addedCurrency });
  }

  return (
    <div className="App">
      <CurrencyInputHeader amount={currencyAmount} onCurrencyAmountUpdate={onCurrencyAmountUpdate} />
      <section className="currency-rates">
        <ul>
          {Object.keys(addedCurrency).map((key) => (
            <CurrencyItem
              shortCode={key}
              currency={CURRENCY_DATA[key]}
              rate={addedCurrency[key]}
              count={currencyAmount}
              onCurrencyRemove={onCurrencyRemove}
            />
          ))}
        </ul>
      </section>
      <AddCurrency onCurrencyAdd={onCurrencyAdd} />
    </div>
  );
}

export default App;