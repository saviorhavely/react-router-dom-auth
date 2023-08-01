import { AuthProvider } from "./contexts/AuthContext";
import AplicationRoutes from "./routes";

function App() {
  return (
    <AuthProvider>
      <AplicationRoutes />
    </AuthProvider>
  );
}

export default App;
