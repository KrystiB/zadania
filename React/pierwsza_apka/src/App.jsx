import './App.css';
import First from './components/First/First';
import Second from './components/Second/Second';
import { Gallery } from './components/Gallery/Gallery';

function App() {
    return (
                <Gallery>
                    <h1>React is great!</h1>
                    <p>React is beautiful</p>
                    <First a={1} b={2}></First>
                    <Second tekst={"abc"}></Second>
                    <First a={4} b={2} />
                    <Second tekst={"tekst"}></Second>
                    <Second tekst={'test'}></Second>
                    <Second tekst={'Hello World!'}></Second>
                </Gallery>
    );
}

export default App;
