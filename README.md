# UI Testing

This project uses webdriver.io to test the purchase flow for the website: `https://www.saucedemo.com/`

The project has been written in JS, and has the following features:

- Eslint following Airbnb configuration
- Husky to run pre-commit hooks
- Page Object Model Pattern.
- It Uses Mocha as test framework
- It also uses de built assertion library from wdio

# How to run the suite?

Once you have pulled the code, make sure you have installed the specific browsers to run the test:

- Chrome
- Safari
- Edge
- Firefox

After that, you need to have the configuration that webdriverio requires. please see https://webdriver.io/docs/gettingstarted/#system-requirements for more details. (Don't forget about JAVA JRE)

You are nearly there, the next step is:

```
npm install
```

That will install all the dependencies. Finally as part of the set up, you need to add a .env file at root level of your project and add this properties:

```
HEADLESS=
STANDARD_USER_PASSWORD=
```

The flag `headless` will tell wdio to execute the suite in that particular mode. Leave it blank if you want a UI execution.

For security reasons the password is not pushed as part of the code base. For local executions you can use .env and for CI/CD the password is stored on the Secrets Vault.

# Docker

TBD - WIP

# CI/CD

TBD - WIP
