import React from 'react';
import ReactDOM from 'react-dom';
import SecretSauce from './SecretSauce';

it('renders SecretSauce component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SecretSauce />, div);
});
