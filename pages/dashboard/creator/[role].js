import { useRouter } from "next/router";
import CreatorWidgets from "../../../components/CreatorWidgets";

export default function CreatorDashboard() {
  const router = useRouter();
  const { role } = router.query;

  return <CreatorWidgets role={role} />;
}
