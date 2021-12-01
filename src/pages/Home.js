import Post from '../components/Post';
import React from 'react';
import { usePaginate } from '../hooks/usePaginate';

const Home = () => {
  const { buttons, posts, progress } = usePaginate();

  return (
    <>
      {posts && (
        <div className='flex flex-col gap-2 border-2 rounded-lg border-black mt-4 p-2'>
          {posts.map((post, index) => (
            <React.Fragment key={post.id}>
              <Post {...post} />
              {index < posts.length - 1 && <hr />}
            </React.Fragment>
          ))}
        </div>
      )}
      {progress && (
        <div className='flex items-center gap-2 mt-4 flex-col'>
          <h4>Page: {progress}</h4>
          {buttons}
        </div>
      )}
    </>
  );
};

export default Home;
