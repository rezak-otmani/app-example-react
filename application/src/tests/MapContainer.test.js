import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MapContainer from '../components/MapContainer';


describe('Google Map Component', () => {

  let wrapper;
 
  beforeEach(() => {
    wrapper = shallow(
      <MapContainer />
    );
  });

          it('it should render the Map ', () => {
                  expect(wrapper.length).toBe(1);
         
           });

          it('it should have a Map component', () => {
                const map = wrapper.find('Map').first();
                 expect((map).length).toBe(1);
               
	  });
        
          it('it should have a Marker component', () => {
                 const marker = wrapper.find('Marker').first();
                 expect((marker).length).toBe(1);

           });


              
            it('renders correctly', () => {
                const tree = renderer.create(
                 <MapContainer />
                          ).toJSON();
                  expect(tree).toMatchSnapshot();
             });



});
