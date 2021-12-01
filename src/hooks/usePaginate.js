import { useState, useEffect } from 'react';

const POSTS_PER_PAGE = 10;
const buttonsArr = ['prev', 'next'];

export const usePaginate = () => {
  const [posts, setPosts] = useState(null);
  const [total, setTotal] = useState(null);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${POSTS_PER_PAGE}`
      );
      if (!total) {
        setTotal(response.headers.get('x-total-count'));
      }
      const data = await response.json();
      setPosts(data);
    };
    fetchData();
  }, [page, total]);

  const selectPage = (dir) => {
    if (dir === 'next') {
      if (page >= Math.ceil(total / POSTS_PER_PAGE)) {
        setPage(1);
      } else {
        setPage((prev) => prev + 1);
      }
    } else if (dir === 'prev') {
      if (page <= 1) {
        setPage(Math.ceil(total / POSTS_PER_PAGE));
      } else {
        setPage((prev) => prev - 1);
      }
    }
  };

  const buttons = (
    <div className='flex gap-4'>
      {buttonsArr.map((dir) => (
        <button className='btn-pagination' key={dir} onClick={() => selectPage(dir)}>
          {dir.toUpperCase()}
        </button>
      ))}
    </div>
  );

  return { buttons, posts, progress: `${page}/${Math.ceil(total / POSTS_PER_PAGE)}` };
};
