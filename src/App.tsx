import "./App.css";
import { Alert, Button, DarkThemeToggle, useThemeMode } from "flowbite-react";

function App() {
  const { mode, toggleMode } = useThemeMode();
  return (
    <div className="bg-primar">
      <DarkThemeToggle />
      <Button color="primary" onClick={() => toggleMode()}>{mode}</Button>
      <Alert color="failure">
        <span className="font-medium text-primary">Info alert!</span> Change a
        few things up and try submitting again.
      </Alert>
    </div>
  );
}

export default App;
