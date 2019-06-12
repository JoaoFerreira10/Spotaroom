import React from 'react';
import homecards from '../api/homecards'; 

describe("API tests", () => {

    it('It returns results from service', async () =>{
        
        const result = await homecards.getInstance().getHomecards();
        expect(result).toBeDefined();
    });
})
