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
    const responseData = response.json();

    if (!response.ok) {
        console.log(responseData)
        const error = new Error(responseData.message || 'Failed to sign up!')
        throw error
    }
    console.log(responseData)
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
  const responseData = response.json();

  if (!response.ok) {
      console.log(responseData)
      const error = new Error(responseData.message || 'Failed to sign up!')
      throw error
  }
  context.commit('setUser', {
      userId: responseData.localId,
      token: responseData.idToken,
      tokenExpiration: responseData.expiresIn
  })
},

};


//       const postId = Math.floor(Math.random() * (10000000000000 * 3.9)) 
