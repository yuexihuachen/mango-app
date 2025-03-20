import React, { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from "./App";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <Suspense fallback={<div>loading</div>}>
        <App />
      </Suspense>
    </StrictMode>
  )
  