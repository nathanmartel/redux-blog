import { createPost, deletePost } from '../actions/postActions';
import reducer from './postReducer';

describe('post reducer', () => {
  it('handles the CREATE_POST action', () => {
    const state = [];
    const action = createPost({
      title: 'Post Title',
      body: 'Lorem ipsum dolor'
    });
    const newState = reducer(state, action);
    expect(newState).toEqual([
      {
        title: 'Post Title',
        body: 'Lorem ipsum dolor'
      }
    ]);
  });
  
  it('handles the DELETE_POST action', () => {
    const state = [{
      title: 'Post Title',
      body: 'Lorem ipsum dolor'
    }];
    const action = deletePost(0);
    const newState = reducer(state, action);
    expect(newState).toEqual([]);
  });

});
