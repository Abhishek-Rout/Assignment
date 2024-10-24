import { useState, useEffect } from 'react';

const PRTCalculator = () => {
  const [principal, setPrincipal] = useState(1);
  const [interest, setInterest] = useState(1);
  const [time, setTime] = useState(1);
  const calculateResult = (p, r, t) => {
    return (p * r * t) / 100 + p;
  };

  const [result, setResult] = useState(calculateResult(1, 1, 1));

  useEffect(() => {
    const p = parseFloat(principal);
    const r = parseFloat(interest);
    const t = parseFloat(time);
    setResult(calculateResult(p, r, t));
  }, [principal, interest, time]);

  return (
    <div style={{ border: '1px solid #333', width: 'fit-content', padding: '10px' }}>
      <label htmlFor='principal' style={{ marginRight: '20px' }}>
        Principal (lakhs): {principal}
      </label>
      <span>1 lk</span>
      <input
        id='principal'
        type='range'
        step='0.5'
        value={principal}
        onChange={(e) => setPrincipal(e.target.value)}
        min='1'
        max='10'
        list='values'
      />
      <span>10 lk</span>
      <br />

      <label style={{ marginRight: '20px' }}>Interest: {interest} %</label>
      <span>1%</span>
      <input
        type='range'
        step='1'
        value={interest}
        onChange={(e) => setInterest(e.target.value)}
        min='1'
        max='10'
        list='values'
      />
      <span>10%</span>
      <br />

      <label style={{ marginRight: '20px' }}>Time: {time} years</label>
      <span>1 year</span>
      <input
        type='range'
        step='1'
        value={time}
        onChange={(e) => setTime(e.target.value)}
        min='1'
        max='10'
        list='values'
      />
      <span>10 years</span>
      <br />

      <p>Total Amount: {result.toFixed(2)} lakhs</p>

      <datalist id='values'>
        <option value='1' label='1'>1</option>
        <option value='2' label='2'>2</option>
        <option value='3' label='3'>3</option>
        <option value='4' label='4'>4</option>
        <option value='5' label='5'>5</option>
        <option value='6' label='6'>6</option>
      </datalist>
    </div>
  );
};

export default PRTCalculator;
