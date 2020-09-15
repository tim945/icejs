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
  },
  router: {
    // "lazy": true, // 约定式路由开启按须加载    
    fallback: <div>loading...</div>
  },
  // 日志 NONE，DEBUG，INFO，WARN 和 ERROR 5 个级别
  logger: {
    level: config.logLevel || 'WARN'
  },
};
createApp(appConfig);
