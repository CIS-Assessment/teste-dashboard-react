import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Dashboard from './pages/Dashboard';
import Global from './styles/global';
import { ThemeProvider } from './hooks/useTheme';
import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <PersistGate persistor={persistor} loading={null}>
          <Dashboard />
          <Global />
        </PersistGate>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
