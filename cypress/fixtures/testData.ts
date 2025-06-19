export const LoginCredentials = {
    validEmail: 'jerinicans@gmail.com',
    validPass: 'Test123!',
};


export const Warnings = {
    invalidCredential: 'The email address or password you entered is invalid',

}

export const generateUser = () => {
    const randomString = Math.random().toString(36).substring(2, 8);
    
    return {
      name: `User${randomString}`,
      email: `testuser${randomString}@test.com`,
      password: `Pass${randomString}!123`,
    };
  };