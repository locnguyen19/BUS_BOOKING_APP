import React from "react";
import '../resourses/layout.css';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserOutlined } from '@ant-design/icons';
import Avatar from 'react-avatar';


function DefaultLayout({ children }) {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = React.useState(false);
  const { user } = useSelector((state) => state.users);
  const userMenu = [
    {
      name: "Home",
      icon: "ri-home-line",
      path: "/",
    },
    {
      name: "Bookings",
      icon: "ri-file-list-line",
      path: "/bookings",
    },
    {
      name: "Profile",
      icon: "ri-user-line",
      path: "/profile",
    },
    {
      name: "Logout",
      icon: "ri-logout-box-line",
      path: "/logout",
    },
  ];
  const adminMenu = [
    {
      name: "Home",
      path: "/",
      icon: "ri-home-line",
    },
    {
      name: "Buses",
      path: "/admin/buses",
      icon: "ri-bus-line",
    },
    {
      name: "Users",
      path: "/admin/users",
      icon: "ri-user-settings-line",
    },
    {
      name: "Bookings",
      path: "/admin/bookings",
      icon: "ri-file-list-line",
    },
    {
      name: "Profile",
      icon: "ri-user-line",
      path: "/profile",
    },
    {
      name: "Logout",
      path: "/logout",
      icon: "ri-logout-box-line",
    },
  ];
  const menuToBeRendered = user?.isAdmin ? adminMenu : userMenu;
  let activeRoute = window.location.pathname;


  return (
    <div className="layout-parent">
      <div className="sidebar">
        <div className="sidebar-header">
          <h1 className="logo">Onnibus-Cheapest Travel</h1>
          <h1 className="role p-3"> Wellcome {user?.name} <br />Role : {user?.isAdmin ? 'Admin' : 'User'}</h1>
          <Avatar facebookId="100008343750912"  size="100" round={true} />
        </div>
        {/* <div>
          <Avatar name="Foo Bar"  size="100" round={true}  />
        </div> */}

        <div className="d-flex flex-column gap-3 justify-content-start menu">
          {menuToBeRendered.map((item) => {
            return (
              <div
                className={`${activeRoute === item.path && "active-menu-item"
                  } menu-item`}
              >
                <i className={item.icon}></i>

                <span
                  onClick={() => {
                    if (item.path === "/logout") {
                      localStorage.removeItem("token");
                      navigate("/login");
                    } else {
                      navigate(item.path);
                    }
                  }}
                >
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="body">
        <div className="header">

        </div>
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
