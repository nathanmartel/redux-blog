import { createPost, CREATE_POST } from './postActions';

describe('posts actions', () => {
  it('creates a post (CREATE_POST action)', () => {
    const action = createPost({
      title: 'Post Title',
      body: 'Lorem ipsum dolor'
    });

    expect(action).toEqual({
      type: CREATE_POST,
      payload: {
        title: 'Post Title',
        body: 'Lorem ipsum dolor'  
      }
    });
  });

});
