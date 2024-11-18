import { Link } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
// import TutorRequestModal from "./TutorRequestModal";
// import { useState } from "react";
// import Swal from "sweetalert2";
// import useAxiosSecure from "../../Hooks/useAxiosSecure";
// import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const { user, logout } = UseAuth();
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);
  // const axiosSecure = useAxiosSecure();

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };
  // const modalHandler = async () => {
  //   try {
  //     const currentUser = {
  //       email: user?.email,
  //       role: "student",
  //       status: "Requested",
  //     };
  //     const { data } = await axiosSecure.put(`/users`, currentUser);
  //     console.log(data);
  //     if (data.modifiedCount > 0) {
  //       Swal.fire({
  //         title: "Success",
  //         text: "You clicked the button!",
  //         icon: "success",
  //       });
  //     } else {
  //       Swal.fire({
  //         title: "Please Wait",
  //         text: "You clicked the button!",
  //         icon: "success",
  //       });
  //     }
  //   } catch (err) {
  //     console.log(err);
  //     Swal.fire({
  //       icon: "error",
  //       title: "Oops...",
  //       text: "Something went wrong!",
  //       footer: '<a href="#">Why do I have this issue?</a>',
  //     });
  //   } finally {
  //     closeModal();
  //   }
  // };
  //  console.log(user)
  return (
    <div>
      <div className="navbar bg-violet-50">
        <div className="navbar-start"></div>
        <div className="flex gap-1">
          <img
            className="w-12 h-12"
            src="https://cdn3.iconfinder.com/data/icons/ios-web-user-interface-flat-circle-vol-3/512/Book_books_education_library_reading_open_book_study-512.png"
            alt=""
          />
          <div className="navbar-center lg:text-3xl text-xl font-bold bg-gradient-to-r from-fuchsia-500  to-purple-500 text-transparent bg-clip-text animate-gradient font-lato">
            <Link to="/">Learn More</Link>
          </div>
        </div>
        <div className="navbar-end ">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt=""
                    src={user?.photoURL || "not found"}
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <p className="font-bold">
                    {user.displayName || "Name not founded"}
                  </p>
                </li>
                <li>
                  <Link to="dashboard">Dashboard</Link>
                </li>
                <li>
                  <button onClick={logout}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <ul className="flex lg:flex-row flex-col-reverse gap-1 mr-2">
              <li>
                <Link to="/login">
                  <button className=" lg:p-3 p-1 lg:px-5 text-center  rounded-2xl bg-gradient-to-r from-fuchsia-500  to-purple-500 text-white font-semibold text-xm mx-auto">
                    Login
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/sign-up">
                  <button className=" lg:p-3  p-1 text-center  rounded-2xl bg-gradient-to-r from-fuchsia-500  to-purple-500 text-white font-semibold text-xm mx-auto">
                    Sign Up
                  </button>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
