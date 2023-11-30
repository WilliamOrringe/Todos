import React, { useEffect, useState, useRef } from 'react';
import Api from '../services/Api';
import MovieCard from '../Components/Cards/Movie';

function Home() {
  const api = new Api(
    'https://moviesdatabase.p.rapidapi.com'
  );
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);
  const loaderRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.get('titles/x/upcoming', {
          limit: '18',
          page,
        });
        console.log(data);
        setMovieList((prevList) => [
          ...prevList,
          ...data.results,
        ]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [page]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prevPage) => prevPage + 1);
      }
    }, options);

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, []);

  return (
    <div className='h-full bg-gray-950'>
      <div className='relative text-center'>
        <h1 className='relative text-[40px] text-white'>
          Welcome to Movie Lists
        </h1>
      </div>
      <br />
      <div className='text-white grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 px-0 sm:px-5 pb-3 gap-[50px]'>
        {movieList.map((movieData, index) => (
          <MovieCard key={index} data={movieData} />
        ))}
      </div>
      <div ref={loaderRef}></div>
    </div>
  );
}

export default Home;

// import React, { useEffect, useState, useRef } from 'react';
// import Api from '../services/Api';
// import { FixedSizeGrid as Grid } from 'react-window';
// import AutoSizer from 'react-virtualized-auto-sizer';
// import MovieCard from '../Components/Cards/Movie';

// const Home = () => {
//   const api = new Api(
//     'https://moviesdatabase.p.rapidapi.com'
//   );
//   const [movieList, setMovieList] = useState([]);
//   const [page, setPage] = useState(1);
//   const loaderRef = useRef(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await api.get('titles/x/upcoming', {
//           limit: '24',
//           page,
//         });
//         setMovieList((prevList) => [
//           ...prevList,
//           ...data.results,
//         ]);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, [page]);

//   useEffect(() => {
//     const options = {
//       root: null,
//       rootMargin: '20px',
//       threshold: 1.0,
//     };

//     const observer = new IntersectionObserver((entries) => {
//       if (entries[0].isIntersecting) {
//         setPage((prevPage) => prevPage + 1);
//       }
//     }, options);

//     if (loaderRef.current) {
//       observer.observe(loaderRef.current);
//     }

//     return () => {
//       if (loaderRef.current) {
//         observer.unobserve(loaderRef.current);
//       }
//     };
//   }, []);

//   const GridItem = ({ columnIndex, rowIndex, style }) => {
//     const index = rowIndex * 5 + columnIndex;
//     const movieData = movieList[index];

//     return (
//       <div style={style}>
//         {movieData && <MovieCard data={movieData} />}
//       </div>
//     );
//   };

//   return (
//     <div className='h-[1000px] bg-gray-950'>
//       <div className='relative text-center'>
//         <h1 className='relative text-[40px] text-white'>
//           Welcome to Movie Lists
//         </h1>
//       </div>
//       <br />
//       <AutoSizer>
//         {({ height, width }) => (
//           <Grid
//             height={height}
//             width={width}
//             columnCount={6}
//             rowCount={Math.ceil(movieList.length / 5)}
//             columnWidth={width / 6}
//             rowHeight={300}
//           >
//             {GridItem}
//           </Grid>
//         )}
//       </AutoSizer>
//       <div ref={loaderRef}></div>
//     </div>
//   );
// };

// export default Home;
