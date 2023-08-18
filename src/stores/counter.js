import { defineStore } from "pinia";

export const useUsers = defineStore("users", {
  state: () => ({
    user: null,
  }),
  actions: {
    async signIn(username, password) {
      try {
        const signInUrl =
          "https://netzwelt-devtest.azurewebsites.net/Account/SignIn";
        const signInData = { username, password };

        const response = await fetch(signInUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signInData),
        });

        if (response.ok) {
          const user = await response.json();
          this.user = user;
          console.log(this.user);
        } else {
          console.error("Login failed");
        }
      } catch (error) {
        console.error("Error:", error);
      }
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
