export const fetchTvShowDetails = async(tvShowId: string) => {
    const res =  await fetch(
        `https://api.themoviedb.org/3/tv/${tvShowId}?language=en-US`,
        {
            headers: {
                Authorization:
                 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTRhODRhYWJjNzU5MjAzYjgyNTZhYzU0MGEyN2EzOCIsIm5iZiI6MTcyMDA4NTk0MS4wNjk2NTIsInN1YiI6IjY2ODY1ZDI5OGI1NDgwMWY2YTVlYmQ5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U2QT8g_1y44rpwmVVVUatSY1Qtef7lzeA19fIXnCHXU'
            }
        }
    );
    
    return res.json();
}
