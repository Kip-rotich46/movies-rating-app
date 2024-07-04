export const mutationLogin = async() =>{
    const res =  await fetch(
        'https://api.themoviedb.org/3/authentication/guest_session/new',
        {
            headers: {
                Authorization:
                 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTRhODRhYWJjNzU5MjAzYjgyNTZhYzU0MGEyN2EzOCIsIm5iZiI6MTcyMDA4NTk0MS4wNjk2NTIsInN1YiI6IjY2ODY1ZDI5OGI1NDgwMWY2YTVlYmQ5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U2QT8g_1y44rpwmVVVUatSY1Qtef7lzeA19fIXnCHXU'
            }
        }
    );
    console.log(res.json);
    return res.json();
}