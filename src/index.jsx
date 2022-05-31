import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import App from './components/App';
import NoMatch from './components/NoMatch';
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';
import NewPost from './pages/NewPost';

import './index.css';
import './bootstrap_custom.scss';

let routeBasePath;
/* global ROUTER_BASE_PATH */
if (ROUTER_BASE_PATH) {
  routeBasePath = '/local-microblogging-client';
}

const root = createRoot(
  document.getElementById('app'),
);

root.render(
  <BrowserRouter basename={routeBasePath}>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="posts">
          <Route path=":postId" element={<BlogPost />} />
          <Route path=":postId/edit" element={<NewPost isEdit />} />
          <Route path="new" element={<NewPost />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
