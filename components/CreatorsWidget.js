export default function CreatorWidgets({ role }) {

  const widgets = {
    va: ["Tasks","Notes","Progress","Chat","Files"],
    smm: ["Content Hub","Analytics","Tasks","Chat","Files"],
    writer: ["Content Hub","Notes","Tasks","Chat","Files"],
    designer: ["Design Upload","Tasks","Chat","Files"],
    video: ["Video Upload","Tasks","Chat","Files"],
    uiux: ["Wireframes","Tasks","Chat","Files"]
  }

  return (
    <div className="grid">
      {widgets[role]?.map(w => <div key={w} className="card">{w}</div>)}
      <div className="card" style={{opacity:0.3}}>🔒 Locked Features</div>
    </div>
  )
             }
