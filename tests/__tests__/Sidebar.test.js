import React from 'react';
import {shallow, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Sidebar from '../../client/src/components/Sidebar';

describe('Sidebar', () => {
  it('should be defined', () => {
    expect(Sidebar).toBeDefined()
  });
  it('should render correctly', () => {
    const tree = shallow(
      <Sidebar />
    );
    expect(tree).toMatchSnapshot();
  })
})