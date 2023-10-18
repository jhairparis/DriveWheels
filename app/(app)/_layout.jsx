import { Redirect } from "expo-router";
import { useSession } from "@/components/providers/SessionProvider";
import Router from "@/components/Router";

export default function AppLayout() {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!session) {
    return <Redirect href="/login" />;
  }

  return <Router />;
}
