/* eslint-disable import/default */
import BabelWorker from 'worker-loader?publicPath=/&name=babel-transpiler.[hash:8].worker.js!./eval/transpilers/babel/worker/index';
/* eslint-enable import/default */
import hookConsole from 'sandbox-hooks/console';
import setupHistoryListeners from 'sandbox-hooks/url-listeners';
import { listenForPreviewSecret } from 'sandbox-hooks/preview-secret';

window.babelworkers = [];
for (let i = 0; i < 3; i++) {
  window.babelworkers.push(new BabelWorker());
}

if (!window.opener) {
  // Means we're in the editor
  setupHistoryListeners();
  hookConsole();
  listenForPreviewSecret();
}
