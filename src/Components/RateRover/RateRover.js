import React, { useState, useEffect } from 'react';
import Select from 'react-select'
import axios from 'axios';
import './RateRover.css'

function RateRover() {
  const apiKey = 'a4f445c212e54cca9ccf72f8038d2e09';

  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [currencies, setCurrencies] = useState([]);
  const [currencyAbreviation, setCurrencyAbreviation] = useState('EUR')

  useEffect(() => {
    async function fetchCurrencies() {
      try {
        const response = await axios.get(`https://openexchangerates.org/api/currencies.json?app_id=${apiKey}`);
        const newCurrencies = Object.keys(response.data).map((code) => ({
          value: code,
          label: code + ' - ' + response.data[code]
        }));
        setCurrencies(newCurrencies);

      } catch (err) {
        console.error(err);
      }
    };
    fetchCurrencies();
  }, [apiKey]);

  async function handleConvert() {
    try {
      const response = await axios.get(`https://openexchangerates.org/api/latest.json?app_id=${apiKey}`);
      const { rates } = response.data;
      const conversionRate = rates[toCurrency] / rates[fromCurrency];
      setConvertedAmount(Math.round(amount * conversionRate * 100) / 100);
      setCurrencyAbreviation(toCurrency)
    } catch (err) {
      console.error(err);
    }
  };

  function handleAmountChange(e) {
    setAmount(e.target.value);
  };

  function handleFromCurrencyChange(option) {
    setFromCurrency(option.value);
  };

  function handleToCurrencyChange(option) {
    setToCurrency(option.value);
  };

  return (
    <div className='container'>
      <div className='rate-rover'>
        <div className='rate-rover-container'>
          <label className='label'>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Enter amount to convert"
            className='currency-input input'
          />
          <label className='label'>From</label>
          <Select 
            options={currencies} 
            onChange={handleFromCurrencyChange} 
            defaultValue={[{value: 'USD', label: 'USD - United States Dollar'}]} 
            isSearchable 
            isClearable 
            className='currency-from-select input'
          />
          <label className='label'>To</label>
          <Select 
            options={currencies} 
            onChange={handleToCurrencyChange} 
            defaultValue={[{value: 'EUR', label: 'EUR - Euro'}]} 
            isSearchable 
            isClearable 
            className='currency-to-select input'
          />
          <button onClick={handleConvert} className='convert-button'>Convert</button>
          <p className='currency-output'>{convertedAmount} {currencyAbreviation}</p>
        </div>
      </div>
    </div>
  );
};

export default RateRover;
