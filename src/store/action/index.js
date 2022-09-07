import axios from "axios";
import {} from "./actionType";

export const register = (formRegister) => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formRegister),
    };
    return fetch(`https://fakestoreapi.com/users`, requestOptions);
  };
};

export const login = (formLogin) => {
  return (dispatch, getState) => {
    return new Promise(async (resolve, reject) => {
      try {
        const resp = await axios.post(
          `https://fakestoreapi.com/auth/login`,
          formLogin
        );
        localStorage.setItem("token", resp.token);
        resolve();
      } catch (err) {
        reject(err);
      }
    });
  };
};

export const deleteUser = (id) => {
  return (dispatch, getState) => {
    return new Promise(async (resolve, reject) => {
      try {
        await axios.delete(`https://fakestoreapi.com/users/${id}`, {});

        resolve();
      } catch (error) {
        reject(error);
      }
    });
  };
};

export const editUser = (formEdit, id) => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formEdit),
    };
    return fetch(`https://fakestoreapi.com/users/${id}`, requestOptions);
  };
};
