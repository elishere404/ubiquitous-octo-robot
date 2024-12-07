import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import hobbies from '../data/hobbies';

const HobbyPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const hobby = hobbies.find((hobby) => hobby.id === parseInt(id));

  if (!hobby) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Hobby Not Found</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => navigate('/hobby')}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-100">
      <button
        className="absolute top-4 right-4 text-gray-600 text-xl font-bold hover:text-gray-800"
        onClick={() => navigate('/hobby')}
      >
        X
      </button>

      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{hobby.title}</div>
          <p className="text-gray-700 text-base">{hobby.description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {hobby.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HobbyPage;
