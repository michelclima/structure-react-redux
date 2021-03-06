import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// AppContainer is a necessary wrapper component for HMR
import { AppContainer } from 'react-hot-loader';

import configureStore from './store/configureStore';
import { loadCourses } from './pages/Courses/CoursesActions';
import { loadAuthors } from './pages/ManageCourses/ManageCoursesActions';

import '../../../node_modules/toastr/build/toastr.css';
import '../styles/main.scss';
import '../styles/teste.css';
import App from './App/App';

const store = configureStore();
store.dispatch(loadCourses()); // Fetch initial list of courses
store.dispatch(loadAuthors()); // Fetch initial list of authors

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('app'),
  )
  ;
};

render(App);
if (module.hot) {
  module.hot.accept('./App/App', () => render(App));
}
