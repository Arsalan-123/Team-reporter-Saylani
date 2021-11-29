import { Route, Routes } from "react-router";
import SignUp from "./Components/SignUp";
import LogIn from './Components/LogIn';
const App = () => {
  return (
      <Routes>
          <Route path='/' element={<LogIn />} />
          <Route path='SignUp' element={< SignUp />} />
      </Routes>
  );
};

export default App;







