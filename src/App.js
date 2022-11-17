import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs">
      
      <div className='p-5 text-center bg-image' id='banner'>
        <h1 className='mb-3' id='banner-text'>Shannon Dann</h1>
      </div>
      <Navigation />
        
      <Footer />

    </ThemeProvider>
  );
}

export default App;
