import { useRouter } from "next/router"
import CreatorWidgets from "../../../components/CreatorWidgets"

export default function CreatorDashboard() {
  const router = useRouter()
  const { role } = router.query

  return (
    <div>
      <h1>{role} Dashboard</h1>
      <CreatorWidgets role={role} />
    </div>
  )
    }
