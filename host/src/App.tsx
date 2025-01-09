import { Suspense } from "react";
import RemoteComponent from "remote/component";

const App = () => {
  return (
    <div>
      <h1>Host App</h1>

      <Suspense fallback="Loading Remote Component...">
        <RemoteComponent />
      </Suspense>
    </div>
  );
};

export default App;
