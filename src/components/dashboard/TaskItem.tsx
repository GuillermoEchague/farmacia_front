interface Props {
  icon: string;
  title: string;
  subtitle: string;
  action: string;
  secondary?: boolean;
}

const TaskItem = ({ icon, title, subtitle, action, secondary }: Props) => (
  <div className="task-item">
    <div className="task-left">
      <span className={`icon ${secondary ? "secondary" : ""}`}>{icon}</span>
      <div>
        <strong>{title}</strong>
        <p>{subtitle}</p>
      </div>
    </div>
    <button className={secondary ? "secondary-btn" : ""}>{action}</button>
  </div>
);

export default TaskItem;
