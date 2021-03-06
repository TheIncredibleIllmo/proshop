import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Header />
            <main className='py-3'>
                <Container>
                    <Route path='/' component={HomeScreen} exact />
                    <Route path='/products/:id' component={ProductScreen} />
                    <Route path='/cart/:id?' component={CartScreen} />
                </Container>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
