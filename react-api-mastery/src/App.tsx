import { useState, useEffect } from "react";

import LoadingSkeleton from "./components/LoadingSkeleton";
import EmptyState from "./components/EmptyState";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return <LoadingSkeleton />;
  }

  const data: string[] = [];

  if (data.length === 0) {
    return <EmptyState />;
  }

  return (
    <div>
      Data Loaded
    </div>
  );
}

export default App;