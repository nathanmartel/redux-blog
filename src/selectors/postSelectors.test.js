import { getPosts, getPostByIndex } from './postSelectors';

describe('post selectors ', () => {
  it('gets all posts', () => {
    const state = [{
      title: 'Post Title',
      body: 'Lorem ipsum dolor'
    }];
    const posts = getPosts(state);
    expect(posts).toEqual([
      {
        title: 'Post Title',
        body: 'Lorem ipsum dolor'
      }
    ]);
  });

  it('gets a post by index', () => {
    const state = [{
      title: 'Post Title',
      body: 'Lorem ipsum dolor'
    }];
    const post = getPostByIndex(state, 0);
    expect(post).toEqual({
      title: 'Post Title',
      body: 'Lorem ipsum dolor'
    });

  });
});
