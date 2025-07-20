import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Homepage from './components/Homepage';

function App() {

  const queryClient = new QueryClient();

  

  return (
    <QueryClientProvider client={queryClient}>
      <Homepage />
    </QueryClientProvider>
    
  )
}

export default App
