export function userFactory() {
  return {
    name: `User_${Math.random().toString(36).substring(7)}`,
    email: `user${Math.floor(Math.random() * 1000)}@example.com`,
  };
}
