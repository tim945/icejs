import React from 'react';
import { createApp, APP_MODE, logger, config  } from 'ice';
import LocaleProvider from '@/components/LocaleProvider';
import { getLocale } from '@/utils/locale';

const locale = getLocale();

const appConfig = {
  app: {
    rootId: 'ice-container',    
    addProvider: ({ children }) => (
      <LocaleProvider locale={locale}>
        {children}
      </LocaleProvider>
    ),
    getInitialData: async () => {
      // 模拟服务端返回的数据
      // const data = await request('/api/auth');
      // const { role, starPermission, followPermission } = data;
      // 约定权限必须返回一个 auth 对象
      // 返回的每个值对应一条权限
      return {
        auth: {
          admin: true,
          guest: false,
          // starRepo: starPermission,
          // followRepo: followPermission
        },
        user: { name: 'Jack Ma', id: '01' }
      }
    },
    store: {
      // 参数 initialData 即 getInitialData 返回的数据
      getInitialStates: (initialData) => {
        // 可按需选择需要作为 initialStates 的数据
        console.log(initialData)
        return initialData;
      }
    }    
  },
  router: {
    // "lazy": true, // 约定式路由开启按须加载    
    fallback: <div>loading...</div>
  },
  auth: {
    // 可选的，设置无权限时的展示组件，默认为 null
    NoAuthFallback: <div>没有权限...</div>,
  },
  // 日志 NONE，DEBUG，INFO，WARN 和 ERROR 5 个级别
  logger: {
    level: config.logLevel || 'WARN'
  },
};
createApp(appConfig);
