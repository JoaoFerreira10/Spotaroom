import React from 'react';
import { create } from 'react-test-renderer';
import HomeList from '../components/HomeList';
import homecards from '../api/homecards'; 

describe("HomeList component test", () => {

  it("it matches with the snapshot", async () => {

    const result = await homecards.getInstance().getHomecards();
    const component = create(<HomeList data={result.homecards}/>);
    expect(component.toJSON()).toMatchSnapshot();
  });
});