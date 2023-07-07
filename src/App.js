import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OccurrencesIndex from "./pages/Ocurrences/Index";
import OccurrencesEdit from "./pages/Ocurrences/Edit";
import StatesIndex from "./pages/States/Index";

function App() {
  return (
    // Makes use of the BrowserRouter, Routes and Route components from react-router-dom
    // The Routes component is used to define the routes of the application
    // The Route component is used to define a route
    // The path prop is used to define the path of the route
    // The element prop is used to define the component that will be rendered when the route is accessed
    // The BrowserRouter component is used to define the router of the application
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Occurrences */}
          <Route path="/occurrences" element={<OccurrencesIndex />} />
          <Route path="/occurrences/:id/edit" element={<OccurrencesEdit />} />
          {/* States */}
          <Route path="/states" element={<StatesIndex />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
