import { faker } from '@faker-js/faker';

/**
 *
 * @returns an object with test data ready to use
 * in here we can keep adding more users for further tests
 */
const generateUserInformation = async () => {
  return await new Promise((resolve) => {
    resolve({
      standard: {
        username: 'standard_user',
        password: process.env.STANDARD_USER_PASSWORD,
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        postalCode: faker.address.zipCode(),
      },
    });
  });
};

export default generateUserInformation;
