import { Provider } from 'react-redux';
import Dashboard from './pages/Dashboard';
import Global from './styles/global';
import { ThemeProvider } from './hooks/useTheme';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Dashboard />
        <Global />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
