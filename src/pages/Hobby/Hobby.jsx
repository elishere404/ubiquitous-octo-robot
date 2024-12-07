import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../cmp/Header';
import hobbies from '../data/hobbies';

const Hobby = () => {
  return (
    <div>
      <Header />
      <br /><br /><br /><br />
      <div className="mt-10 flex flex-wrap justify-center gap-6 px-4">
        {hobbies.map((hobby) => (
          <Link to={`/hobby/${hobby.id}`} key={hobby.id}>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:shadow-xl transition">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{hobby.title}</div>
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
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Hobby;
