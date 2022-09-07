import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUser, editUser } from "../store/action";

require("react-dom");

export default function Card({ user }) {
  const { id } = user;
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const editHandler = (e) => {
    e.preventDefault();
    console.log(id, "<<<id");
    dispatch(editUser(id));
  };

  const deleteHandler = (e) => {
    e.preventDefault();
    console.log(id, "<<<id");
    dispatch(deleteUser(id));
  };

  return (
    <>
      <div
        // onClick={handleDetailPage}
        className="cursor-pointer h-full relative max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="relative h-full max-w-sm bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-t-lg h-[200px] w-full object-cover" alt="" />

          <div className="p-5">
            <div className="text-left">
              <div className="flex flex-row">
                <a className="inline-flex items-left py-1 px-1 text-sm font-small text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                  {user.username}
                </a>
              </div>

              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {user.name.firstname} {user.name.lastname}
              </h5>
            </div>

            <br />

            <p className="mb-4 text-justify font-normal text-gray-700 dark:text-gray-400">
              e-mail : {user.email} <br />
              phone: {user.phone}
              <br />
              Address:
              <br />
              {user.address.street} {user.address.number} {user.address.city}{" "}
              {user.address.zipcode} <br />
              {/* {user.address.geolocation.lat}, {user.address.geolocation.long} */}
            </p>
            <button
              value={id}
              onClick={editHandler}
              className="text-white bg-green-700 py-2 px-2 rounded-lg"
            >
              Edit
            </button>
            <button
              value={id}
              onClick={deleteHandler}
              className="text-white bg-red-700 py-2 px-2 rounded-lg"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
