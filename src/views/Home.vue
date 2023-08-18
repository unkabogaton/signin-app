<template>
  <v-container
    ><v-card v-if="user">This is home {{ user.displayName }} </v-card>
    {{ territories }}
  </v-container>
</template>

<script>
import { useUsers } from "@/stores/counter";
const store = useUsers();
import axios from "axios";

export default {
  data() {
    return {
      user: store.user,
      territories: [],
    };
  },
  async created() {
    await axios
      .get("api/Territories/All")
      .then((response) => {
        if (response.status === 200) {
          const responseData = response.data; // This is the response data from the server
          this.territories = responseData;
        } else {
          console.error("Fetch failed");
        }
      })
      .catch((error) => {
        // Handle network or other errors
        console.error("Error fetching:", error);
      });
  },
};
</script>

<style></style>
