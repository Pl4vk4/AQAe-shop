export const LoginCredentials = {
    validEmail: 'jerinicans@gmail.com',
    validPass: 'Test123!',
};


export const Warnings = {
    invalidCredential: 'The email address or password you entered is invalid',
    emptyUserName: 'The username field is required.',
    emptyPassword: 'The password field is required.',
    emptyEmail: 'The email field is required.',
    invalidEmailFormat: 'The email field format is invalid.',
    passwordTooShort: 'The password field must be at least 6 characters.',
    takenEmail: 'The email has already been taken.',
}

export const generateUser = () => {
    const randomString = Math.random().toString(36).substring(2, 8);
    
    return {
      name: `User${randomString}`,
      email: `testuser${randomString}@test.com`,
      password: `Pass${randomString}!123`,
    };
  };


  export const searchItem = {
   existingItem: '3080',
   nonExisting: 'rtrtr',
}
