import React from 'react';
import ReactDOM from 'react-dom';
import Beneficiaries from './Beneficiaries';

it('renders Beneficiaries component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Beneficiaries />, div);
});
