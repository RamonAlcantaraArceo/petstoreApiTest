
import {expect} from 'chai';
import * as PetStore from '../../petstoreApi/api';
import * as http from 'http';

describe('Store', function() {
  describe('Inventory', () => {

    it('Get', () => {
        const store = new PetStore.StoreApi();
        return store.getInventory().then( (response: http.IncomingMessage, body) => {
            expect(response["response"].statusCode).to.equal(200);
            expect(response["body"]).to.not.be.equal(undefined);
        })
    })
  });
});