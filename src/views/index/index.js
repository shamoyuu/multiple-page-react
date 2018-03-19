import React from 'react';
import ReactDOM from 'react-dom';
import Index from './index.component';
import registerServiceWorker from '@/tools/registerServiceWorker';

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
