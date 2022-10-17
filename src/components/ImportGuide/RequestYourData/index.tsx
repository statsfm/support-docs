import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import WebDataRequest from './web';
import EmailDataRequest from './email';
import ChatDataRequest from './chat';
import { useLocation } from '@docusaurus/router';

export default function RequestYourDataStep(): JSX.Element {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const tab = params.get('requestdatatab') ?? 'default';
  return (
    <Tabs
      defaultValue={
        ['default', 'email', 'livechat'].includes(tab.toLowerCase())
          ? tab.toLowerCase()
          : 'default'
      }
    >
      <TabItem value="default" label="Default">
        <WebDataRequest />
      </TabItem>
      <TabItem value="email" label="Email">
        <EmailDataRequest />
      </TabItem>
      <TabItem value="livechat" label="Live Chat">
        <ChatDataRequest />
      </TabItem>
    </Tabs>
  );
}
