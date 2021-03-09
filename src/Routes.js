
import React, { lazy, Suspense, Fragment } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Layout from './components/layout';
import LoadingScreen from './components/LoadingScreen';
import AuthGuard from './components/AuthGuard';

const routesConfig = [
  {
    exact: true,
    layout: Layout,
    path: '/',
    component: lazy(() => import('./pages/PokemonMap'))
  },
  {
    exact: true,
    path: '/404',
    component: lazy(() => import('./pages/Error404View'))
  },
  // {
  //   exact: true,
  //   layout: Layout,
  //   path: '/results',
  //   component: lazy(() => import('./pages/Results'))
  // },
  {
    path: '/results',
    layout: Layout,
    routes: [
      {
        exact: true,
        path: '/details',
        component: () => <Redirect to="/PokemonDetails" />
      },
      {
        exact: true,
        path: '/results',
        component: lazy(() => import('./pages/PokemonDetails'))
      },
      {
        component: () => <Redirect to="/404" />
      }
    ]
  },

];

const renderRoutes = routes =>
  routes ? (
    <Suspense fallback={<LoadingScreen />}>
      <Switch>
        {routes.map((route, i) => {
          const Guard = route.guard || Fragment;
          const Layout = route.layout || Fragment;
          const Component = route.component;

          return (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              render={props => (
                <Guard>
                  <Layout>
                    {route.routes ? (
                      renderRoutes(route.routes)
                    ) : (
                      <Component {...props} />
                    )}
                  </Layout>
                </Guard>
              )}
            />
          );
        })}
      </Switch>
    </Suspense>
  ) : null;

function Routes() {
  return renderRoutes(routesConfig);
}

export default Routes;
