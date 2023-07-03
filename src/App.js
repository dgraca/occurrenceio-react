import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OccurrencesIndex from "./pages/Ocurrences/Index";

function App() {
  return (
    // Makes use of the BrowserRouter, Routes and Route components from react-router-dom
    // The Routes component is used to define the routes of the application
    // The Route component is used to define a route
    // The path prop is used to define the path of the route
    // The element prop is used to define the component that will be rendered when the route is accessed
    // The BrowserRouter component is used to define the router of the application
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Occurrences */}
        <Route path="/occurrences" element={<OccurrencesIndex />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
