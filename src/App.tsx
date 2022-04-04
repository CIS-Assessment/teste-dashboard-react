import Dashboard from './pages/Dashboard';
import Global from './styles/global';
import { ThemeProvider } from './hooks/useTheme';

function App() {
  return (
    <ThemeProvider>
      <Dashboard />
      <Global />
    </ThemeProvider>
  );
}

export default App;
