import { useLocation } from "wouter";
import { useAuth } from "@/hooks/useAuth";

export default function Debug() {
  const [location] = useLocation();
  const { isAuthenticated, isLoading, user } = useAuth();

  return (
    <div className="bg-dark-primary text-white p-4 min-h-screen">
      <h1 className="text-2xl mb-4">Debug Info</h1>
      <div className="space-y-2">
        <p><strong>Current Location:</strong> {location}</p>
        <p><strong>Is Loading:</strong> {isLoading ? 'true' : 'false'}</p>
        <p><strong>Is Authenticated:</strong> {isAuthenticated ? 'true' : 'false'}</p>
        <p><strong>User:</strong> {user ? JSON.stringify(user, null, 2) : 'null'}</p>
      </div>
    </div>
  );
}