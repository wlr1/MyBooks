import React from 'react';
import Search from '../Search/Search';
import Books from '../Books/Books';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto my-8 p-4 sm:p-6 md:p-8 lg:p-12 sm:max-w-2">
      <div>
        <h2 className="text-center text-2xl sm:text-3xl font-bold font-poppins text-purple-drk mb-2 mt-4 sm:mt-8">
          Type to search!
        </h2>
        <Search />
      </div>
      <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-12">
        <Books />
      </div>
    </div>
  );
};

export default Home;
