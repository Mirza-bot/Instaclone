export default {
  async signup(context, payload) {
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB8Bpygv3HCtWd027AWWnxIp4AcO3aR0og`,
      {
        method: "POST",
        body: JSON.stringify({
          email: payload.eMail,
          password: payload.password,
          returnSecureToken: true
        }),
      }
    );
    const responseData = await response.json();

    if (!response.ok) {
        const error = new Error(responseData.message || 'Failed to sign up!')
        throw error
    }
    context.commit('setUser', {
        userId: responseData.localId,
        token: responseData.idToken,
        tokenExpiration: responseData.expiresIn
    })
  },

  async login(context, payload) {
  const response = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB8Bpygv3HCtWd027AWWnxIp4AcO3aR0og`,
    {
      method: "POST",
      body: JSON.stringify({
        email: payload.eMail,
        password: payload.password,
        returnSecureToken: true
      }),
    }
  );
  const responseData = await response.json();

  if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to sign up!')
      throw error
  }
  context.commit('setUser', {
      userId: responseData.localId,
      token: responseData.idToken,
      tokenExpiration: responseData.expiresIn
  })
},


async sendUserData(context, payload) {
  const token = context.getters.getToken;
  const response = await fetch(
    `https://instaclone-application-default-rtdb.europe-west1.firebasedatabase.app/users/${payload.username}.json?auth=` + token,
    {
      method: "POST",
      body: JSON.stringify({
        username: payload.username,
        firstname: payload.firstname,
        lastname: payload.lastname
      }),
    }
  );
  const responseData = await response.json();

  if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to send Data!')
      throw error
  }
  context.commit('setUserData', {
    username: payload.username,
    firstname: payload.firstname,
    lastname: payload.lastname
  })
},

};





