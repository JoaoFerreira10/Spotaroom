import React from 'react';
import { create } from 'react-test-renderer';
import MenuBar from '../components/MenuBar';

describe("MenuBar component test", () => {

  it("it matches with the snapshot", () => {
      
    const component = create(<MenuBar />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});