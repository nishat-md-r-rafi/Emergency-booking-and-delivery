import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Home/Header/Header";
import Login from "./components/Login/Login";
import AuthProvider from "./contexts/AuthProvider";
import Footer from "./components/Home/Footer/Footer";
import AddService from "./components/AddService/AddService";
import MyOrders from "./components/MyOrders/MyOrders";
import ManageAllOrders from "./components/ManageAllOrders/ManageAllOrders";
import UpdateService from "./components/UpdateService/UpdateService";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/addService">
              <AddService></AddService>
            </Route>
            <Route path="/myOrders">
              <MyOrders></MyOrders>
            </Route>
            <Route path="/manageOrders">
              <ManageAllOrders></ManageAllOrders>
            </Route>
            <Route path="/services/update/:id">
              <UpdateService></UpdateService>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
