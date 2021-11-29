import { FC, } from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import routerConfig from './routes/index.jsx'

import './App.less';
import './App.scss';

const App: FC = () => {
  return useRoutes(routerConfig)
}

const AppWrapper: FC = () => {
  return (
    <Router>
      <App />
    </Router>
  )
}

export default AppWrapper;
