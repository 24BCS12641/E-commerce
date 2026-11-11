import { useEffect, useState } from "react";
import api from "../services/api";

export default function AdminUsers() {

  const [users, setUsers] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers =
    async () => {

      try {

        const { data } =
          await api.get(
            "/users"
          );

        setUsers(data);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }
    };

  return (
    <div className="admin-users-page">

      <h1>
        All Users
      </h1>

      {loading ? (

        <p>Loading...</p>

      ) : (

        <div className="users-table">

          <div className="users-head">

            <span>Name</span>
            <span>Email</span>
            <span>Role</span>

          </div>

          {users.map(user => (

            <div
              className="users-row"
              key={user._id}
            >

              <span>
                {user.name}
              </span>

              <span>
                {user.email}
              </span>

              <span>
                {user.isAdmin
                  ? "Admin"
                  : "User"}
              </span>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}