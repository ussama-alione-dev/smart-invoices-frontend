const PaymentChart = () => {
  return (
    <div className="dashboard-box">
      <h2 className="section-title">PAYMENT STATUS</h2>

      <div className="fake-chart">
        <div className="circle-chart">
          <div className="circle-center">45%</div>
        </div>

        <div className="chart-info">
          <div className="chart-item">
            <span className="dot paid-dot"></span>
            Paid
          </div>

          <div className="chart-item">
            <span className="dot partial-dot"></span>
            Partial
          </div>

          <div className="chart-item">
            <span className="dot unpaid-dot"></span>
            Unpaid
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentChart;
