import React from 'react';
import ReactDOM from 'react-dom';
import FaqPage from './FaqPage';

it('renders FaqPage component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FaqPage />, div);
});
