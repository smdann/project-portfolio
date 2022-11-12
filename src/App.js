import {
  ChakraProvider,
  Box,
  Text,
  theme,
} from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Header />
      </Box>
    
      <Box textAlign="center" fontSize="xl">
        <Text>
          Shannon Dann
        </Text>
      </Box>

    </ChakraProvider>
  );
}

export default App;
