import { faker } from '@faker-js/faker';

const generateUserInformation = () => {
  return {
    standard: {
      username: 'standard_user',
      password: process.env.STANDARD_USER_PASSWORD,
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      zipCode: faker.address.zipCode(),
    },
  };
};

export default { generateUserInformation };
