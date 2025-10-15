const CustomerTable = ({ customers }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Customer</th>
          <th>June</th>
          <th>July</th>
          <th>August</th>
          <th>Total Points</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer) => (
          <tr key={customer.name}>
            <td className="customer-name">{customer.name}</td>
            <td className="points">{customer.months.June}</td>
            <td className="points">{customer.months.July}</td>
            <td className="points">{customer.months.August}</td>
            <td className="total-points">{customer.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomerTable;