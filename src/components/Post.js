import { useNavigate } from 'react-router-dom';

const Post = ({ id, title, body }) => {
  const navigate = useNavigate();
  return (
    <div className='flex gap-2'>
      <div className='flex flex-col flex-1 gap-2'>
        <p>
          <strong>Title:</strong> {title}
        </p>
        <p>
          <strong>Body:</strong> {body.length > 60 ? body.substring(0, 60) + '...' : body}
        </p>
      </div>
      <div className='flex flex-col'>
        <p>
          <strong>Id:</strong> {id}
        </p>
        <button
          onClick={() => navigate(`/comments/${id}`, { state: { title, body } })}
          className='px-4 py-2 rounded-md bg-blue-500 text-white inline-block mt-auto '
        >
          Comments
        </button>
      </div>
    </div>
  );
};

export default Post;
