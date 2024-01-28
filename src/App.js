import logo from "./logo.svg";
import "./App.css";
import UseState from "./Components/UseState";
import ArraysWithUseState from "./Components/ArraysWithUseState";
import ObjectsWithUseState from "./Components/ObjectsWithUseState";
import StringswithUsestate from "./Components/StringswithUsestate.jsx";
import UseEffect from "./Components/UseEffect";
import EmptyDependecy from "./Components/UseEffect/EmptyDependecy.jsx";
import DependencyArray from "./Components/UseEffect/DependencyArray.jsx";
import NoDependencies from "./Components/UseEffect/NoDependencies.jsx";
import UseReducer from "./Components/UseReducer";
import UseCallback from "./Components/UseCallback/UseCallback.jsx";
import UseMemo from "./Components/UseMemo.jsx";
import UseRef from "./Components/UseRef";
import UseLayout from "./Components/UseLayout";
import { Parent } from "./Components/UseContext/Parent.jsx";
import ChildComponent from "./Components/UseContext/ChildComponent";
import Uncontrolled from "./Components/Uncontrolled_Component";
import ControlledSeperate from "./Components/Controlled_Seperate";
import ControlledObject from "./Components/Controlled_Object";
import FormValidation from "./Components/Form_Validation";
import AsyncValidation from "./Components/Async_Validation";
import Formik from "./Components/Formik";
import Navigation from "./Components/Navigation";
import Counter from "./Components/Counter";
import Dashboard from "./Components/Dashboard";
import Dashboard_2 from "./Components/Dashboard_2";
import Post from "./Components/Post";
import UseNavigate from "./Components/UseNavigate";
import Error from "./Components/Error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginContext } from './Components/ProtectedRoutes/LoginContext';
import {ProtectedRoutes} from './Components/ProtectedRoutes/ProtectedRoutes';
import Login from './Components/ProtectedRoutes/Login';

function App() {
  return (
    <>
      {/* UseState Hook */}
      <UseState />
      <StringswithUsestate />
      <ArraysWithUseState />
      <ObjectsWithUseState />

      {/* UseEffect Hook */}
      <UseEffect />
      <EmptyDependecy />
      <DependencyArray />
      <NoDependencies />

      <UseRef />
      <UseReducer />
      <UseCallback />
      <UseMemo />
      <UseLayout />

      {/* UseContext Hook */}
      <Parent>
        <ChildComponent />
      </Parent>

      {/* Uncontrolled Components in Forms */}
      <Uncontrolled />

      {/* Controlled Components Using separate state variables in Forms */}
      <ControlledSeperate />

      {/* Controlled Components Using objects in Forms */}
      <ControlledObject />

      {/* Validatings in Forms */}
      <FormValidation />

      {/* Asynchronous validation of forms */}
      <AsyncValidation />

      {/* Use of Formik library for validations in forms */}
      <Formik />

      {/* Routes */}
      {/* <Router>
        <Routes>
          <Route path="/" element={<Navigation />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/dashboard_2/*" element={<Dashboard_2 />} />
          <Route path="/posts/:params" element={<Post />} />
          <Route path="/useNavigate" element={<UseNavigate />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router> */}

      {/* Protected Routes */}

      <LoginContext>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/counter" element={<Counter />} />
              <Route path="/dashboard/*" element={<Dashboard />} />
              <Route path="/dashboard_2/*" element={<Dashboard_2 />} />
            </Route>
          </Routes>
        </Router>
      </LoginContext>

    </>
  );
}

export default App;
