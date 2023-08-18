import { defineStore } from "pinia";
import axios from "axios";

export const useUsers = defineStore("users", {
  state: () => ({
    user: null,
  }),
  actions: {
    async signIn(username, password) {
      const signInUrl = "/api/Account/SignIn";
      const signInData = {
        username,
        password,
      };
      axios
        .post(signInUrl, signInData, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          if (response.status === 200) {
            const responseData = response.data; // This is the response data from the server
            this.user = responseData;
            console.log(this.user.displayName);
            // Handle the response data or redirect
          } else {
            // Handle sign-in error
            console.error("Sign-in failed");
          }
        })
        .catch((error) => {
          // Handle network or other errors
          console.error("Error signing in:", error);
        });
    },
  },
});

export function createStore() {
  return {
    state: () => ({
      user: null,
    }),
  };
}
