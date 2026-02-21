import CreatorWidgets from "../../../components/CreatorWidgets"

export default function CreatorDashboard({ params }) {
  const role = params?.role || "creator"

  return (
    <div>
      <h2>{role} Dashboard</h2>
      <CreatorWidgets role={role} />
    </div>
  )
}
