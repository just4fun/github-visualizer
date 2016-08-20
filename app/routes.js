// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

let previousPath = null;

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store);

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);

          previousPath = nextState.location.pathname;
        });

        importModules.catch(errorLoading);
      }
    },
    {
      path: '/users/:user',
      name: 'user',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/UserPage/reducer'),
          System.import('containers/UserPage/sagas'),
          System.import('containers/UserPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('user', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);

          previousPath = nextState.location.pathname;
        });

        importModules.catch(errorLoading);
      }
    },
    {
      path: '/users/:user/:repo',
      name: 'repo',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/RepoPage/reducer'),
          System.import('containers/RepoPage/sagas'),
          System.import('containers/RepoPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('repo', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);

          previousPath = nextState.location.pathname;
        });

        importModules.catch(errorLoading);
      }
    },
    {
      path: '/search',
      name: 'search',
      getComponent(nextState, cb) {
        if (previousPath === nextState.location.pathname) { return; }

        const importModules = Promise.all([
          System.import('containers/SearchPage/reducer'),
          System.import('containers/SearchPage/sagas'),
          System.import('containers/SearchPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('search', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);

          previousPath = nextState.location.pathname;

        });

        importModules.catch(errorLoading);
      }
    },
    {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        System.import('containers/NotFoundPage')
          .then(() => {
            loadModule(cb);
            previousPath = nextState.location.pathname;
          })
          .catch(errorLoading);
      }
    },
  ];
}
