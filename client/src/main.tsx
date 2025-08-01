import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { store } from '@/app/store';
import { Provider } from 'react-redux';
import { ErrorBoundary } from "react-error-boundary";
import { ConfigProvider } from 'antd';
import App from '@/app/App';
import { Loading } from '@/components/Loading';
import { ErrorInfo } from '@/components/ErrorInfo';
import '@ant-design/v5-patch-for-react-19';
import './index.css';

// ErrorBoundary: 使用错误边界捕获渲染错误
// Suspense: 在组件切换暂时过度方案
const rootEl = document.getElementById('root');
if (rootEl) {
  const root = createRoot(rootEl);
  root.render(
    <StrictMode>
      <ErrorBoundary fallback={<ErrorInfo />}>
        <Suspense fallback={<Loading />}>
          <Provider store={store} children={
            <ConfigProvider
              theme={{
                "token": {
                  "colorPrimary": "#4f39f6",
                  "colorInfo": "#4f39f6"
                }
              }}>
              <App />
            </ConfigProvider>
          } />
        </Suspense>
      </ErrorBoundary>
    </StrictMode>
  );
}




