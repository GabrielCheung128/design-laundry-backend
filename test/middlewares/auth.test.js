const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const token = require('../../utils/token');
chai.use(sinonChai);

const auth = require('../../middlewares/auth');

describe('middlewares > auth', () => {
    it('should throw 401 error when no token is provided', () => {
        const ctx = {
            get: sinon.stub().returns(undefined),
            throw: sinon.stub(),
        };
        const eventStub = sinon.stub();
        const nextStub = sinon.stub();
        auth(eventStub)(ctx, nextStub);
        expect(ctx.throw).to.have.been.calledWith(401, 'Invalid Token');
    });

    it('should call event when auth ', async () => {
        const ctx = {
            get: sinon.stub().returns(token.createToken({ username: 'test' })),
            throw: sinon.stub(),
        };
        const eventStub = sinon.stub();
        const nextStub = sinon.stub();
        await auth(eventStub)(ctx, nextStub);
        expect(eventStub).to.have.been.calledWith(ctx, nextStub, sinon.match({ user: { username: 'test' } }));
    });

});