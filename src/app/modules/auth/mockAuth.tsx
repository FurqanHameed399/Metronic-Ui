// mockAuth.js

const mockUser = {
  email: 'admin@demo.com',
  password: 'demo',
  // Add any other user details as needed
};

// Add type annotations for function parameters
// mockAuth.js

export const login = (email: string, password: string) => {
  return new Promise((resolve, reject) => {
    if (email === mockUser.email && password === mockUser.password) {
      // Simulate a successful login by resolving with the user object
      resolve(mockUser);
    } else {
      // Simulate a login failure by rejecting
      reject('Invalid login details');
    }
  });
};
