import logo from './logo.svg';
import './App.css';
import ProductList from "./Components/Product/ProductList";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src="../public/assets/img/under-construction.gif" className="App-logo" alt="logo" />
                <hr/>
                <section>
                    <ProductList/>
                </section>
            </header>
        </div>
    );
}

export default App;
