import React from 'react';
import ReactDOM from 'react-dom';
import Test from './test.component';
import registerServiceWorker from '@/tools/registerServiceWorker';

ReactDOM.render(<Test />, document.getElementById('root'));
registerServiceWorker();
