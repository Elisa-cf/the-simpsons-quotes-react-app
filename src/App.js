import logo from './logo.svg';
import './App.css';
import QuoteCard from './components/QuoteCard';
import {useState} from 'react'
import axios from 'axios';



function App() {
  const [quoteList, setQuoteList] = useState([]);

  const getQuote = () => {
    // Send the request
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes?count=10')
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        console.log(data);setQuoteList(data[0]);
      });
  };

  return (
    <div className="App">
      <h1>Simpsons Quotes</h1>
      <QuoteCard quotes={quoteList}/>
      <button type="button" onClick={getQuote}>Get quote</button>
    </div>
  );
}

export default App;
