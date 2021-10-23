import iconCheck from '../images/icon-check.svg';

function TrialInfo() {
  return (
    <div className='trial-info'>
      <ul className='trial-benefits'>
        {BENEFITS.map((item, index) => (
          <li key={index}>
            <img src={iconCheck} alt='Check Icon' />
            <p className='trial-content'>{item}</p>
          </li>
        ))}
      </ul>
      <button className='btn'>Start my trial</button>
    </div>
  );
}

const BENEFITS = ['Unlimited websites', '100% data ownership', 'Email reports'];

export default TrialInfo;
