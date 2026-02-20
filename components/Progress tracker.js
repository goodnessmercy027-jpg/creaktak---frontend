export default function ProgressTracker({ team }) {
  return team.map(m => (
    <div className="card" key={m.name}>
      <img src={m.avatar} width="30" style={{borderRadius:"50%"}} />
      {m.name} - {m.task} - {m.progress}%
    </div>
  ))
                  }
