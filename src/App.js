import Navbar from './Components/Navbar';
import Homead from './Components/Homead';
import Homemenu from './Components/Homemenu';
import Recommended from './Components/Recommended';
import Topics from './Components/Topics__Recommended';
import Mostpop from './Components/Most__popular';
import Footer from './Components/Footer';

function App() {
    return (
        <div>
            <Navbar></Navbar>
            <Homemenu></Homemenu>
            <Homead></Homead>
            <Recommended></Recommended>
            <Topics></Topics>
            <Mostpop></Mostpop>
            <Footer></Footer>
        </div>
    )
}

export default App