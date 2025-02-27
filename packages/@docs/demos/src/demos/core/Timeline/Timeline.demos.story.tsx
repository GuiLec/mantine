import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Timeline' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoConfigurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const DemoBullet = {
  name: '⭐ Demo: bullet',
  render: renderDemo(demos.bullet),
};
