const assert= require('assert');
const buildMessage=require('../utils/buildMessage');

describe.only('utils-buildMessage', function(){
    describe('when receives an entity and an action', function(){
        it('should return the respective message', function(){
            const result= buildMessage('movie', 'create');
            const expect='movie created';
            assert.strictEqual(result, expect);
        })
    })
    describe('when receive an entity and an action and is a list', function(){
        it('should return the respectiv message with the entity in plural', function(){
            const result=buildMessage('movie', 'list');
            const expected='movie listed'
            assert.strictEqual(result, expected);
        })
    })
})