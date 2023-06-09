import React from 'react';
import Main from './Page/Main/Main';
import { QueryClientProvider, QueryClient} from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import './Reset.css'
// 20230421 이효상 recoil import
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

const queryClient = new QueryClient();

const App : React.FC = () => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Main/>
        </BrowserRouter>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default App;
