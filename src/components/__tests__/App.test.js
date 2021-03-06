import React from 'react';
import Root from 'Root';
import App from 'components/App';
import {mount} from 'enzyme';
import {Container, FlexWrapper} from 'components/Div';
import Header from '../Header';
import ResolutionTabs from 'components/ResolutionTabs';
import ProgressBar from 'components/ProgressBar';
import InfoGroup from 'components/InfoGroup';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <App />
    </Root>);
});
afterEach(() => {
  wrapped.unmount();
});
it('shows a container box', () => {
  expect(wrapped.find(Container).length).toEqual(1);
});
it('shows a flexwrapper list', () => {
  expect(wrapped.find(FlexWrapper).length).toEqual(1);
});
it('shows a header list', () => {
  expect(wrapped.find(Header).length).toEqual(1);
});
it('shows a resolutionTabs list', () => {
  expect(wrapped.find(ResolutionTabs).length).toEqual(1);
});
it('shows a progressBar list', () => {
  expect(wrapped.find(ProgressBar).length).toEqual(1);
});
it('shows a infogroup  list', () => {
  expect(wrapped.find(InfoGroup).length).toEqual(1);
});