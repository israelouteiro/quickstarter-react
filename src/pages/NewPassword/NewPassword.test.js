import React from 'react';
import ReactDOM from 'react-dom';
import NewPassword from './NewPassword';

it('render: NewPassword OK', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewPassword />, div);
  ReactDOM.unmountComponentAtNode(div);
});
