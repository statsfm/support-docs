import React from 'react';
import { useLocation } from '@docusaurus/router';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import WebImport from './WebImport';
import AppImport from './AppImport';

export default function ImportingStep(): JSX.Element {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const tab = params.get('importtab') ?? 'web';
  return (
    <Tabs
      defaultValue={
        ['web', 'app'].includes(tab.toLowerCase()) ? tab.toLowerCase() : 'web'
      }
    >
      <TabItem value="web" label="Web Import">
        <WebImport />
      </TabItem>
      <TabItem value="app" label="App Import">
        <AppImport />
      </TabItem>
    </Tabs>
  );
}
