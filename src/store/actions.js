export default {
  async signup(username, eMail, password) {
      const userId = Math.floor(Math.random() * (10000000000000 / 23.3)) 
    await fetch(
      `https://instaclone-application-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}.json`,
      {
        method: "POST",
        body: JSON.stringify({
          eMail: eMail,
          password: password,
          username: username,
        }),
      }
    );
  },
};
