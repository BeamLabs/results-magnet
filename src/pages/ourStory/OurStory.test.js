import React from 'react';
import ReactDOM from 'react-dom';
import OurStory from './OurStory';

it('renders OurStory component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OurStory />, div);
});
