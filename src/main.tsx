import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";

import { Landing, Login } from "./pages";
import { Header, Footer, Notification } from "./components";
import { NotificationProps } from "./interfaces";

const App = () => {
  const [notifications, setNotifications] = useState([] as NotificationProps[]);

  const notify = (notification: NotificationProps) => {
    setNotifications([...notifications, notification]);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header page="Landing" />
              <Landing />
              <Footer page="Landing" />
            </>
          }
        />

        <Route
          path="/login"
          element={
            <>
              <Login notify={notify} />
              <Footer page="Login" />
            </>
          }
        />
      </Routes>

      <div className="absolute flex flex-col-reverse bottom-0 z-[100] gap-[5px] left-1/2 transform -translate-x-1/2 pb-[15px]">
        {notifications.map((notification, index) => {
          return (
            <Notification
              key={`notification-${index}`}
              title={notification.title}
              info={notification.info}
            />
          );
        })}
      </div>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
