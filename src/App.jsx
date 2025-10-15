import { useState, useEffect } from 'react';
import { fetchTransactions } from './api/transctions.js'
import { processTransactions } from './utils/rewards.js';
import CustomerTable from './components/CustomerTable.jsx';
import './App.css';

const App = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchTransactions();
        const processedData = processTransactions(data);
        setCustomers(processedData);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch transactions');
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="container">
      <h1 className="title">Rewards Program</h1>
      <div className="table-container">
        <CustomerTable customers={customers} />
      </div>
    </div>
  );
};

export default App;