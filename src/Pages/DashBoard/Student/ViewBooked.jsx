import { Link } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";
import { useState, useEffect } from "react";
import axios from "axios";

const ViewBooked = () => {
  const { user } = UseAuth();
  const [books, setBooks] = useState();
  useEffect(() => {
    getData();
  }, [user]);

  const getData = async () => {
    const { data } = await axios(
      `${import.meta.env.VITE_API_URL}/bookedSession/${user?.email}`
    );
    setBooks(data);
    console.log(data);
  };

  return (
    <div>
      <div className="mb-16">
        <section className="container px-4 mx-auto">
          <div className="flex items-center mt-6 gap-x-3 ">
            <h2 className="text-2xl  font-bold text-orange-600 dark:text-white">
              Booked Session
            </h2>

            <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
              {books?.length}
            </span>
          </div>

          <div className="flex flex-col mt-6">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 ">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div className="flex items-center gap-x-3">
                            <span>No.</span>
                          </div>
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div className="flex items-center gap-x-3">
                            <span>User Email</span>
                          </div>
                        </th>

                        <th
                          scope="col"
                          className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <button className="flex items-center gap-x-2">
                            <span>Course Id</span>
                          </button>
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          {" "}
                          Description Details
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                      {books?.map((book, index) => (
                        <tr key={book._id}>
                          <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div>
                              <h2 className="font-semibold text-xl text-gray-800 dark:text-white ">
                                {index + 1}
                              </h2>
                            </div>
                          </td>
                          <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div>
                              <h2 className="font-semibold text-xl text-gray-800 dark:text-white ">
                                {book.email}
                              </h2>
                            </div>
                          </td>
                          <td className="px-4 py-4 font-semibold text-xl text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            {book.courseId}
                          </td>

                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                              <div className="flex items-center gap-x-6">
                                <Link to={`/detailsPage/${book.courseId}`}>
                                  <button className="btn">See More</button>
                                </Link>
                              </div>
                            </td>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ViewBooked;
