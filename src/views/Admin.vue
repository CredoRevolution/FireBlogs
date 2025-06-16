<template>
  <div class="admin">
    <div class="container">
      <h2>Administration</h2>
      <div class="admin-info">
        <h2>Add Admin</h2>
        <div class="input">
          <input placeholder="Enter user email to make them an admin" type="email" id="addAdmins" v-model="adminEmail" />
        </div>
        <span>{{ this.functionMsg }}</span>
        <button @click="addAdmin" class="button">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import { getFunctions, httpsCallable } from "firebase/functions";
export default {
  name: "Admin",
  data() {
    return {
      adminEmail: "",
      functionMsg: null,
    };
  },
  methods: {
    async addAdmin() {
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.adminEmail)) {
        this.functionMsg = "Please enter a valid email address";
        return;
      }

      try {
        // Get the functions instance with the specified region
        // Ensure we're using the same region as specified in the function definition
        const functions = getFunctions(undefined, 'us-central1');

        // Create the callable function
        const addAdminRole = httpsCallable(functions, "addAdminRole");

        // Prepare the email
        const trimmedEmail = this.adminEmail.trim();
        console.log("Sending email:", trimmedEmail);
        // Create the payload with the email
        const payload = { email: trimmedEmail };
        // Call the function with the payload
        const result = await addAdminRole(payload);
        // Update the UI with the response message
        this.functionMsg = result.data.message;
      } catch (error) {
        // Log and display any errors
        console.error("Error:", error);
        console.error("Error code:", error.code);
        console.error("Error message:", error.message);
        console.error("Error details:", error.details);
        this.functionMsg = error.message || "An error occurred while adding admin";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.admin {
  .container {
    max-width: 1000px;
    padding: 60px 25px;

    h2 {
      text-align: center;
      margin-bottom: 16px;
      font-weight: 300;
      font-size: 32px;
    }

    .admin-info {
      border-radius: 8px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      padding: 32px;
      background-color: #f1f1f1;
      display: flex;
      flex-direction: column;
      max-width: 600px;
      margin: 32px auto;

      span {
        font-size: 14px;
      }

      .input {
        margin: 16px 0;

        label {
          font-size: 14px;
          display: block;
          padding-bottom: 6px;
        }
        input {
          width: 100%;
          border: none;
          background-color: #f2f7f6;
          padding: 8px;
          height: 50px;
          @media (min-width: 900px) {
          }

          &:focus {
            outline: none;
          }
        }
      }

      button {
        align-self: center;
      }
    }
  }
}
</style>
