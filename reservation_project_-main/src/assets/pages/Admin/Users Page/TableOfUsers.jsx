import { AiOutlineDelete } from "react-icons/ai";
// import { BiEdit } from "react-icons/bi";
import Swal from "sweetalert2";
import { useEffect, useState, useReducer } from "react";
import axios from "axios";

export const TableOfUsers = () => {
  const [users, setUsers] = useState([]);
  const [reducer, forceUpdate] = useReducer((x) => x + 1, 0);
 
  
  useEffect(() => {
    axios
      .get("http://localhost:5500/admin/users/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [reducer]);

  const handleDelete = (id, name) => {
    console.log(id, name);
    Swal.fire({
      title: ` do you want to remove ${name}?  `,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
      icon: "warning",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire(` ${name} has been removed `, "", "success");

        axios
          .put("http://localhost:5500/admin/users/users/" + id)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => console.log(error.message));
        forceUpdate();
      } else Swal.fire(" Cancelled", "", "error");
    });
  };
  
  const tableRows = users.map((user) => {
    return (
      <tr key={user.user_id} className="border-b dark:border-gray-700">
        <th
          scope="row"
          className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {user.user_name}
        </th>
        <td className="px-4 py-3">{user.user_email}</td>
        <td className="px-4 py-3">{user.user_password}</td>
        <td className="px-4 py-3">{user.user_type}</td>

        <td className="px-4 py-3 flex items-center justify-end">
          <div id="" className="bg-white flex gap-2 rounded ">
            
            <div className="tooltip tooltip-error text-white" data-tip="Delete">
              <button
                onClick={() => handleDelete(user.user_id, user.user_name)}
                className="btn bg-white hover:bg-red-200 shadow-lg hover:shadow-xl border-none "
              >
                <AiOutlineDelete className="text-red-500 text-[15px]" />
              </button>
            </div>
          </div>
        </td>
      </tr>
    );
  });

  return (
    <section className="w-full dark:bg-gray-900 mt-5 ">
      <div className="">
        <h1 className="text-[30px] font-bold py-3">Users</h1>
        {/* Start coding here */}
        <div className="bg-white  relative shadow-md sm:rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-white uppercase bg-[#222] dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    User Name
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Password
                  </th>
                  <th scope="col" className="px-4 py-3">
                    User Type
                  </th>

                  <th scope="col" className="px-4 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableRows.length === 0 ? (
                  <div className="p-3 text-lg">There are no users</div>
                ) : (
                  tableRows
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
