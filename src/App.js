import { GlobalStyle } from './globalStyles'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Navbar, Home, Calculator, EmiCalculator, CryptoCurrencies, CryptoOverview, CryptoPersonal, Savings, Contact } from './components/index'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Calculator/Calculator" exact component={Calculator} />
          <Route path="/Crypto/CryptoCurrencies" exact component={CryptoCurrencies} />
          <Route path="/Crypto/CryptoOverview/CryptoOverview" exact component={CryptoOverview} />
          <Route path="/Crypto/CryptoPersonal/CryptoPersonal" exact component={CryptoPersonal} />
          <Route path="/Emi/EmiCalculator" exact component={EmiCalculator} />
          <Route path="/Savings/Savings" exact component={Savings} />
          <Route path="/Contact/Contact" exact component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
