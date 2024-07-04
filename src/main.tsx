import React from 'react'
import ReactDOM from 'react-dom/client';
import "semantic-ui-css/semantic.min.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import App from './App.tsx'
import './index.css';

const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)

//API Key
//ee4a84aabc759203b8256ac540a27a38

//API Read Access Token
//eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTRhODRhYWJjNzU5MjAzYjgyNTZhYzU0MGEyN2EzOCIsIm5iZiI6MTcyMDA4MjA0Ni45NzE0MjksInN1YiI6IjY2ODY1ZDI5OGI1NDgwMWY2YTVlYmQ5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-iaedpkCMVP34uiWm9_skWNVsqNWLxApf0qmvZZSagM