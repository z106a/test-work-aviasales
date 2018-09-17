import React from 'react';
import {mount} from 'enzyme';
import moxios from 'moxios'
import Root from '../Root';
import App from '../components/App';

let wrapped;
beforeEach(() => {
  wrapped = mount(
    <Root>
      <App />
    </Root>
  );
  moxios.install();
  moxios.stubRequest('http://localhost:8000/dashboard_data.json', {
    status: 200,
    response: [
      {name: 'Fetch #1'},
      {name: 'Fetch #2'}
    ]
  });
});

afterEach(() => {
  moxios.uninstall();
  wrapped.unmount();
});

it('cat fetch data and display it', () => {
  wrapped.find('.m-btn').simulate('click');
  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find('li').length).toEqual(2);
    done();
    wrapped.unmount();
  });
});