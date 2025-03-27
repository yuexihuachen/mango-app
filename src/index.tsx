import React, { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { store } from '~/store';
import { Provider } from 'react-redux';
import { ErrorBoundary } from "react-error-boundary";
import './index.css';
import App from './App';

const root = createRoot(document.getElementById('root'));

const Loading = () => {
  return <div className={`fixed top-0 left-0 w-full bg-gray-50/60 h-dvh`}>
  <img
    width={32}
    height={32}
    className="w-8 h-8 m-auto mt-72 animate-spin size-5"
    alt="logo"
    src="/loading.svg"
  />
</div>
}

root.render(
  <StrictMode>
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <Suspense fallback={<Loading />}>
          <Provider store={store} children={<App />} />
      </Suspense>
    </ErrorBoundary>
  </StrictMode>
);
