import React from 'react';
import Enzyme from 'enzyme';
import {shallow, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Sidebar from '../../client/src/components/Sidebar';

Enzyme.configure({ adapter: new Adapter() });



describe('Sidebar', () => {
  
  // test('should render with the correct items', () => {
  //   const sidebar = mount(
  //     <Sidebar />
  //     );
  //   expect(Sidebar).toMatchSnapshot();
  // });
});
