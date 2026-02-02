const PeriodSelector = () => (
  <div className="period">
    <div className="month">
      ‹ <strong>October 2023</strong> ›
    </div>

    <div className="calendar">
      {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((d) => (
        <span key={d}>{d}</span>
      ))}
      {[27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((day) => (
        <span key={day} className={day >= 4 && day <= 10 ? "selected" : ""}>
          {day}
        </span>
      ))}
    </div>
  </div>
);

export default PeriodSelector;
