import { FaStar, FaEye, FaShareAlt, FaRegBookmark } from 'react-icons/fa';
import { Link, Navigate } from 'react-router';

const NewsCard = ({ news }) => {
  const {
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
    tags,
    id,
  } = news || {};

  // Format date
  const formattedDate = author?.published_date
    ? new Date(author.published_date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : 'Unknown date';

  return (
    <div className="card w-full bg-base-100 shadow-md hover:shadow-lg transition-all duration-200">
      {/* Card Header */}
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{author?.name}</h3>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-gray-500 text-lg">
          <FaRegBookmark className="cursor-pointer hover:text-primary" />
          <FaShareAlt className="cursor-pointer hover:text-primary" />
        </div>
      </div>

      {/* Body */}
      <div className="card-body space-y-3">
        <h2 className="card-title text-xl font-bold text-gray-800 leading-snug">
          {title}
        </h2>

        <img
          src={thumbnail_url}
          alt="news thumbnail"
          className="w-full h-65 rounded-xl object-cover"
        />
        <p className=" text-gray-600">
          {details.length > 200 ? (
            <>
              {details.slice(0, 200)}...{' '}
              <Link to={`/news/${id}`}>
                {' '}
                <span className="text-secondary font-semibold cursor-pointer hover:underline">
                  Read More
                </span>
              </Link>
            </>
          ) : (
            details
          )}
        </p>

        {/* Footer */}
        <div className="divider my-3"></div>
        <div className="flex justify-between items-center text-sm text-gray-700">
          {/* Rating */}
          <div className="flex items-center gap-1 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={
                  i < rating.number ? 'text-yellow-500' : 'text-gray-300'
                }
              />
            ))}
            <span className="ml-1 text-gray-800">
              {rating.number.toFixed(1)}
            </span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-1">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
