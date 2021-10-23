import { useState } from 'react';
import TrialInfo from './TrialInfo';

function Trial() {
  const [discount, setDiscount] = useState(1);
  const [index, setIndex] = useState(2);

  const { price, pageviews } = TRIAL_TYPES[index];
  const totalBill = discount === 1 ? price : price * discount * 12;
  const billDuration = discount === 1 ? 'month' : 'year';

  return (
    <form className='trial-form' onSubmit={e => e.preventDefault()}>
      <div className='trial'>
        <div className='pricing'>
          <p className='page-views'>{pageviews} pageviews</p>
          <p className='bill'>
            <span className='bill-amount'>${totalBill.toFixed(2)}</span>/
            {billDuration}
          </p>
        </div>
        <div className='slidebar'>
          <input
            type='range'
            name='price-range'
            id='price-range'
            max='4'
            value={index}
            onChange={e => setIndex(+e.target.value)}
          />
        </div>
        <div className='billing-type'>
          <label htmlFor='monthly'>Monthly Billing</label>
          <input
            type='radio'
            name='billing'
            id='monthly'
            checked={discount === 1}
            onChange={() => setDiscount(1)}
          />
          <input
            type='radio'
            name='billing'
            id='yearly'
            checked={discount === 0.75}
            onChange={() => setDiscount(0.75)}
          />
          <label htmlFor='yearly'>
            Yearly Billing <span className='discount'>25% discount</span>
          </label>
        </div>
      </div>
      <TrialInfo />
    </form>
  );
}

const TRIAL_TYPES = [
  {
    pageviews: '10K',
    price: 8,
  },
  {
    pageviews: '50K',
    price: 12,
  },
  {
    pageviews: '100K',
    price: 16,
  },
  {
    pageviews: '500K',
    price: 24,
  },
  {
    pageviews: '1M',
    price: 36,
  },
];

export default Trial;
