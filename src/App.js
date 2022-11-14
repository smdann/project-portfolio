
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    minBreakpoint="xxs">
      
      <div className='p-5 text-center bg-light'>
        <h1 className='mb-3'>Shannon Dann</h1>
        <h4 className='mb-3'>Full Stack Web Developer</h4>
      </div>
      <Navigation />
        
      <Footer />

    </ThemeProvider>
  );
}

export default App;
