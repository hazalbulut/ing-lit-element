import { createStore } from 'redux';
import { rootReducer, AppState } from './reducers';

export const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__?.()
);

// Type-safe dispatch ve state için yardımcı fonksiyonlar
export const dispatch = store.dispatch;
export const getState = (): AppState => store.getState(); 