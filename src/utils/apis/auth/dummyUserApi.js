export const login = async (data) => {
  try {
    const dummyUser = [
      { username: "user1", password: "password123" },
      { username: "user2", password: "password456" },
      { username: "user3", password: "password789" },
    ];

    const foundUser = dummyUser.find(
      (user) =>
        user.username === data.username && user.password === data.password
    );

    if (!foundUser) {
      let usernameValid = false;
      let passwordValid = false;

      dummyUser.forEach((user) => {
        if (user.username === data.username) {
          usernameValid = true;
        }
        if (user.password === data.password) {
          passwordValid = true;
        }
      });

      if (!usernameValid && !passwordValid) {
        throw new Error("Invalid username and password");
      } else if (!usernameValid) {
        throw new Error("Invalid username");
      } else {
        throw new Error("Invalid password");
      }
    }

    return foundUser;
  } catch (error) {
    throw Error(error.message);
  }
};
