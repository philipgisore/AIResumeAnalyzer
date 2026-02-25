export const authService = {
  login: async (name) => {
    // Check if user already exists
    let existingUser = localStorage.getItem(name);

    if (existingUser) {
      const parsed = JSON.parse(existingUser);
      localStorage.setItem("currentUser", JSON.stringify(parsed));
      return parsed;
    }

    // Create new user
    const newUser = {
      id: Date.now(),
      name,
      analyses: [] // important for dashboard
    };

    localStorage.setItem(name, JSON.stringify(newUser));
    localStorage.setItem("currentUser", JSON.stringify(newUser));

    return newUser;
  },

  getCurrentUser: () => {
    const user = localStorage.getItem("currentUser");
    return user ? JSON.parse(user) : null;
  },

  updateUser: (updatedUser) => {
    localStorage.setItem(updatedUser.name, JSON.stringify(updatedUser));
    localStorage.setItem("currentUser", JSON.stringify(updatedUser));
  },

  logout: () => {
    localStorage.removeItem("currentUser");
  }
};