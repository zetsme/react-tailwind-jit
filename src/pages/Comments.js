import { useParams, useLocation } from 'react-router-dom';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { useFetch } from '../hooks/useFetch';
import Comment from '../components/Comment';

import { useContext } from 'react';

const LeftArrow = () => {
  const { scrollPrev, isFirstItemVisible } = useContext(VisibilityContext);
  return (
    <button className='btn-arrow' disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      ←
    </button>
  );
};
const RightArrow = () => {
  const { scrollNext, isLastItemVisible } = useContext(VisibilityContext);
  return (
    <button disabled={isLastItemVisible} className='btn-arrow' onClick={() => scrollNext()}>
      →
    </button>
  );
};

const Comments = () => {
  const { postId } = useParams();
  const location = useLocation();
  const { title, body } = location?.state;

  const { data: comments, loading } = useFetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  );

  return (
    <>
      <div className='sm:w-[320px] md:w-[600px]  mx-auto scrollbar bg-purple-300 p-1 md:p-4 rounded-lg my-8'>
        <h1>
          <strong>Post:</strong> {postId}
        </h1>
        <p>
          <strong>Title:</strong> {title}
        </p>
        <p>
          <strong>Body:</strong> {body}
        </p>
      </div>
      {loading && <h1>Loading ....</h1>}
      {comments && (
        <ScrollMenu
          wrapperClassName='sm:w-[320px] md:w-[600px]  mx-auto scrollbar bg-red-200 p-1 md:p-4 rounded-lg'
          LeftArrow={LeftArrow}
          RightArrow={RightArrow}
        >
          {comments.map((comment) => (
            <Comment itemId={comment.id} key={comment.id} {...comment} />
          ))}
        </ScrollMenu>
      )}
    </>
  );
};

export default Comments;
