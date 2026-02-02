// Mock auth service
export const login = async (username: string, password: string) => {
  console.log("Mock login for:", username, password.length > 0 ? "with password" : "");
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  return {
    token: "mock-jwt-token-for-" + username,
    user: {
      id: "1",
      username: username,
      role: "admin"
    }
  };
};
