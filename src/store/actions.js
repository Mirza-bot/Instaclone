import { app, db, collection, getDocs, addDoc, setDoc, doc } from "../firebase";

export default {
  async signup(context, payload) {
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB8Bpygv3HCtWd027AWWnxIp4AcO3aR0og`,
      {
        method: "POST",
        body: JSON.stringify({
          email: payload.eMail,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to sign up!");
      throw error;
    }

    context.dispatch("sendUserData", {
      userId: responseData.localId,
      username: payload.username,
      firstname: payload.firstname,
      lastname: payload.lastname,
    });

    context.commit("setUser", {
      userId: responseData.localId,
      token: responseData.idToken,
      tokenExpiration: responseData.expiresIn,
    });
  },

  async login(context, payload) {
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB8Bpygv3HCtWd027AWWnxIp4AcO3aR0og`,
      {
        method: "POST",
        body: JSON.stringify({
          email: payload.eMail,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to sign up!");
      throw error;
    }
    context.commit("setUser", {
      userId: responseData.localId,
      token: responseData.idToken,
      tokenExpiration: responseData.expiresIn,
    });
  },

  async sendUserData(context, payload) {
    try {
      await setDoc(doc(db, "users" , `${payload.username}`), {
        userId: payload.userId,
        username: payload.username,
        firstname: payload.firstname,
        lastname: payload.lastname,
      });
      context.commit("setUserData", {
        username: payload.username,
        firstname: payload.firstname,
        lastname: payload.lastname,
      });
      console.log(`User ${payload.username} added to the database.`);
    } catch (e) {
      console.error("Error sending userdata:", e);
    }
  },
};
