// import React from 'react';

// const MovieCard = ({
//   data,
// }: {
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   data?: Record<string, any>;
// }) => {
//   return (
//     <div className='flex flex-col items-center bg-gray-800 p-4 pb-1 rounded-md shadow-md'>
//       <h2 className='text-white text-lg font-semibold mb-2'>
//         {data?.titleText.text}
//       </h2>
//       <img
//         src={data?.primaryImage?.url || 'placeholder-url'} // Replace 'placeholder-url' with your default image URL or add a placeholder image
//         alt={data?.titleText.text}
//         className='h-48 w-48 object-cover rounded-md mb-2'
//       />
//       <p className='text-white text-sm'>
//         <strong>Release Date:</strong>{' '}
//         {`${data?.releaseDate.day}/${data?.releaseDate.month}/${data?.releaseDate.year}`}
//       </p>
//       <p className='text-white text-sm'>
//         <strong>Title Type:</strong> {data?.titleType.text}
//       </p>
//     </div>
//   );
// };

// export default MovieCard;
import React from 'react';

const MovieCard = ({
  data,
}: {
  data?: Record<string, any>;
}) => {
  return (
    <div className='relative group w-max rounded-md shadow-xl overflow-hidden'>
      <img
        src={'data?.primaryImage?.url' || 'placeholder-url'}
        alt={data?.titleText.text}
        className='object-cover w-[40vw] h-[40vh] sm:w-48 sm:h-48 rounded-md transition-transform duration-300 transform group-hover:scale-110'
      />
      <div className='absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:cursor-pointer'>
        <h2 className='text-white text-lg font-semibold mb-2'>
          {data?.titleText.text}
        </h2>
        <p className='text-white text-sm'>
          <strong>Release Date:</strong>{' '}
          {`${data?.releaseDate.day}/${data?.releaseDate.month}/${data?.releaseDate.year}`}
        </p>
        <p className='text-white text-sm'>
          <strong>Title Type:</strong>{' '}
          {data?.titleType.text}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
