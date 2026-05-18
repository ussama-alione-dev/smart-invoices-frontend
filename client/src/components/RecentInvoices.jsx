const invoices = [
  {
    id: "INV-001",
    supplier: "mch Supplies",
    amount: "$4200",
    status: "Unpaid",
  },

  {
    id: "INV-002",
    supplier: "Tech Corp",
    amount: "$3357",
    status: "Unpaid",
  },

  {
    id: "INV-003",
    supplier: "Creative Studio",
    amount: "$1945",
    status: "Partial",
  },
];

const RecentInvoices = () => {
  return (
    <div className="dashboard-box">
      <h2 className="section-title">RECENT INVOICES</h2>

      <div className="invoice-list">
        {invoices.map((invoice) => (
          <div key={invoice.id} className="invoice-item">
            <div>
              <h3>{invoice.id}</h3>
              <p>{invoice.supplier}</p>
            </div>

            <div className="invoice-right">
              <p>{invoice.amount}</p>
              <span className={invoice.status.toLowerCase()}>
                {invoice.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentInvoices;
