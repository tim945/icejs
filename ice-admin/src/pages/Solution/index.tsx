import React from 'react';
import { useAuth } from 'ice';
import { ResponsiveGrid } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import Tasks from './components/Tasks';
import UserInfo from './components/UserInfo';
import SelectLang from './components/SelectLang';

const { Cell } = ResponsiveGrid;

const Solution = () => {
  const [auth, setAuth] = useAuth();

  // 更新权限
  function updateAuth() {
    setAuth({ guest: !auth.guest});
  }

  return (
    <ResponsiveGrid gap={20}>
      <Cell colSpan={12}>
        <PageHeader
          title="官方推荐方案"
          description="包括状态管理方案、多语言切换的示例"
          breadcrumbs={[]}
        />
      </Cell>

      <Cell colSpan={12}>
        <Tasks />
      </Cell>

      <Cell colSpan={12}>
        <UserInfo />
      </Cell>

      <Cell colSpan={12}>
        <SelectLang />
      </Cell>
      <Cell colSpan={12}>
      当前用户角色：
      <code>{JSON.stringify(auth)}</code>
      <button type="button" onClick={updateAuth}>更新权限</button>
      </Cell>

    </ResponsiveGrid>
  );
};

// Solution.pageConfig = {
//   // 可选，配置准入权限，若不配置则代表所有角色都可以访问
//   auth: ['admin'],
// };

export default Solution;
