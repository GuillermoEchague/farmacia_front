const ReportSummary = () => (
  <section className="summary">
    <h2>PharmaTrack Management</h2>
    <p>Internal Inventory Audit Report</p>
    <p className="muted">Generated on Oct 24, 2023 | 10:45 AM</p>

    <div className="summary-cards">
      <div className="card">
        <span>Total Items</span>
        <strong>1,240</strong>
      </div>

      <div className="card alert">
        <span>Low Stock</span>
        <strong>12</strong>
      </div>

      <div className="card wide">
        <span>Total Valuation</span>
        <strong className="blue">$14,200.50</strong>
      </div>
    </div>
  </section>
);

export default ReportSummary;
