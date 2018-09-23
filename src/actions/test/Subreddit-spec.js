import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import sinon from 'sinon';
import { expect } from 'chai';
import { fetchPost } from '../subreddit-actions';

describe('ASYNC action', () => {
    let mockStore;
    before(() => {
        mockStore = configureMockStore([thunk]);
        moxios.install();
    });

    after(() => {
        moxios.uninstall();
    });

    it('should dispacth and get result properly', done => {
        const dispacthMock = sinon.mock();
        moxios.withMock(() => {
            fetchPost({ type: 'REQUEST_POSTS_PENDING' })(dispacthMock);
            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                request
                    .respondWith({
                        status: 200,
                        response: ''
                    })
                    .then(() => {
                        expect(request.url).to.be.eq('');
                        expect(dispacthMock).to.be.call();
                    })
                    .catch(err => {
                        done(err);
                    });
            });
        });
    });
});
