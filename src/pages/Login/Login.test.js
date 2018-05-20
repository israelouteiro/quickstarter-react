import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';

it('render: Login OK', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Login />, div);
  ReactDOM.unmountComponentAtNode(div);
});
