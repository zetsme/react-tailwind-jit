const Comment = ({ id, body, email }) => {
  return (
    <div className='w-[260px] md:w-[500px]  p-8'>
      <p>
        <strong>Comment Id:</strong>
        {id}
      </p>
      <p>
        <strong>Email:</strong>
        {email}
      </p>
      <p>
        <strong>Body:</strong>
        {body}
      </p>
    </div>
  );
};

export default Comment;
