export default function TaskCard({ task }) {
  return (
    <div className="card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Progress: {task.progress_percent}%</p>
      <p>Status: {task.status}</p>
    </div>
  )
}
