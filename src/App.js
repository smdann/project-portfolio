import {
  Box,
  Text,
} from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import ThemeProvider from 'react-bootstrap/ThemeProvider'

function App() {
  return (
    <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    minBreakpoint="xxs">
      <Box>
        
      </Box>
    
      <Navigation />

      <Box textAlign="center" fontSize="xl">
        <Text>
          
        </Text>
      </Box>

    </ThemeProvider>
  );
}

export default App;
