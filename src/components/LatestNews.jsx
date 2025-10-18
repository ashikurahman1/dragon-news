import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
  const [trendingNews, setTrendingNews] = useState([]);

  useEffect(() => {
    fetch('/news.json')
      .then(res => res.json())
      .then(data => {
        const trending = data.filter(news => news.others?.is_trending);
        setTrendingNews(trending);
      })
      .catch(err => console.error('Error fetching news:', err));
  }, []);

  return (
    <div className="flex items-center bg-base-200 gap-5 p-3">
      <p className="bg-secondary text-base-100 px-3 py-2">Latest</p>
      <Marquee className="flex gap-5" pauseOnHover={true} speed={60}>
        {trendingNews.length > 0 ? (
          trendingNews.map(item => (
            <p key={item.id} className="font-semibold mr-10">
              {item.title}
            </p>
          ))
        ) : (
          <p className="font-semibold">Loading trending news...</p>
        )}
      </Marquee>
    </div>
  );
};

export default LatestNews;
