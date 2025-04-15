export const fetchMovies = async () => {
    const res = await fetch(
      'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTRhODRhYWJjNzU5MjAzYjgyNTZhYzU0MGEyN2EzOCIsIm5iZiI6MTcyMDA4NTk0MS4wNjk2NTIsInN1YiI6IjY2ODY1ZDI5OGI1NDgwMWY2YTVlYmQ5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U2QT8g_1y44rpwmVVVUatSY1Qtef7lzeA19fIXnCHXU',
        },
      }
    );
  
    if (!res.ok) {
      throw new Error('Failed to fetch movies');
    }
  
    const data = await res.json();
    console.log("Fetched Movies:", data); // Now you will see the actual list of movies
    return data;
  };
  

export const fetchTvShows = async () => {
    const res = await fetch(
      'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1',
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTRhODRhYWJjNzU5MjAzYjgyNTZhYzU0MGEyN2EzOCIsIm5iZiI6MTcyMDA4NTk0MS4wNjk2NTIsInN1YiI6IjY2ODY1ZDI5OGI1NDgwMWY2YTVlYmQ5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U2QT8g_1y44rpwmVVVUatSY1Qtef7lzeA19fIXnCHXU',
        },
      }
    );
  
    if (!res.ok) {
      throw new Error('Failed to fetch TV shows');
    }
  
    const data = await res.json();
    console.log("Fetched TV Shows:", data); // Now you will see the actual list of TV shows
    return data;
  };
  
// Query.ts

  