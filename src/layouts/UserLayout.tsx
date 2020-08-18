import React from 'react';
import loadable from '@loadable/component';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import Loading from '@/components/Loading';

// ==================
// 异步加载各路由模块
// ==================
// const [NotFound, Login] = [
//   // () => import("../pages/ErrorPages/404"),
//   () => import('../views/Login'),
// ].map((item) => {
//   return loadable(item, {
//     fallback: <Loading />,
//   });
// });
const [Login] = [() => import('../views/Login')].map((item) => {
  return loadable(item, {
    fallback: <Loading />,
  });
});

export default function UserLayout(): JSX.Element {
  return (
    <Layout style={{ height: '100vh' }}>
      <Layout.Content
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Switch>
          <Redirect exact from='/user' to='/user/login' />
          <Route exact path='/user/login' component={Login} />
        </Switch>
      </Layout.Content>
    </Layout>
  );
}
