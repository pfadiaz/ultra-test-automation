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
- Edge
- Firefox

After that, you need to have the configuration that webdriverio requires. please see
https://webdriver.io/docs/gettingstarted/#system-requirements for more details. (Don't forget about JAVA JRE)

You are nearly there, the next step is:

```
npm install
```

That will install all the dependencies. Finally as part of the set up, you need to add a .env file at root level of your
project and add this properties:

```
HEADLESS=
STANDARD_USER_PASSWORD=
```

You can find the password for standard_user at https://www.saucedemo.com/ just paste it there.

The flag `headless` will tell wdio to execute the suite in that particular mode. Leave it blank if you want a UI
execution.

For security reasons the password is not pushed as part of the code base. For local executions you can use .env and for
CI/CD the password is stored on the Secrets Vault.

# Note about Crossbrowser testing:

In order to perform crossbrowser testing, you just need to open your .env file located at the root level and add a new
variable:

```
BROWSER=
```

If you want to run the test in all the browser at the same time just do:

```
BROWSER=All
```

If you want to run it in chrome only:

```
BROWSER=Chrome
```

If you want to run it in MicrosoftEdge only:

```
BROWSER=MicrosoftEdge
```

If you want to run it in Firefox only:

```
BROWSER=Firefox
```

You can also execute all the tests in all the browsers in headless mode:

```
HEADLESS=Yes
BROWSER=All
```

Or visually:

```
HEADLESS=No
BROWSER=All
```

Once you have selected the capabilities to run, just head to your terminal and run:

```
npm run wdio:test:desktop
```

It will spin up 3 browsers at the time (if you chose all), otherwise one browser will be spawn.

# Spec Details

The Suite uses a before hook to extract the logic functionality. Inside you can find the use of `this`.

Following the `world` pattern which is basically a state of the test, we can share context of a specific moment across
the different `it` so in this case we don't need to reload the same data everytime. Instead just call `this`. The only
caveat here, `=>`. That is why you find `function` as it invalides the binding.

As the test is E2E, the resulting spec can be very long. Hard to follow. Due to this, I tried to wrap most of the common
actions on each page.

The Test will pick a random entry from the inventory list and stores the important data such as price tag and the item
name on `this.itemInCart` so, later can be used for assertions.

You can also find a fixtures folder where we can add that static content that can be loaded and wrap around `this` to
use it everywhere.

# Docker

Rememeber to download Docker in your machine before running the suite with this approach.

The project has been configured using:

- Docker
- Docker Service from wdio
- Selenium Grid 4

They will work together to trigger the suite in localhost:4444 by combining the configuration from docker.conf.js and
docker-compose.yml entries.

How to run it?, simple just do:

```
npm run wdio:test:docker
```

This command wraps `docker` in detached mode and will pull all the images from docker hub. It will pull 3 images:

- selenium/node-edge
- selenium/node-firefox
- selenium/node-chrome

### Keep in mind that the first time you run it, it will take longer as it will pull all images

---

Once the images are ready and the Grid is up and running (you can see it in localhost:4444/ui), the process will run the
tests in those 3 browsers, the orchestration is handled by selenium-hub:

```
  selenium-hub:
    image: selenium/hub:4.1.2-20220217
    container_name: selenium-hub
    ports:
      - '4442:4442'
      - '4443:4443'
      - '4444:4444'
```

As you can see in the docker-compose.yml there are some extra configurations applying to each node:

### VNC_NO_PASSWORD

- Allows to watch the execution in real time from localhost:4444/ui with no pass.

### SE_NODE_MAX_SESSIONS

- Spawn up to 2 session at the time (concurrency)

In addition to that, I'm adding extra settings to record videos of our executions and it will store the videos in the
reports folder located at the project's root `./reports/videos`.

From the wdio side, a new config was created, as it needs the docker service to communicate with docker. By seeting up 3
simple things:

```
  hostname: 'localhost',
  port: 4444,
  path: '/',
```

As well as the capabilities that should match the images pulled from docker hub

If you want to run docker to check the logs you just need to do:

```
docker-compose up
```

Then, open a new terminal and run:

```
npx wdio ./config/docker.conf.js
```

The videos will record the whole session, since the moment you ran docker-compose up. So once you are done, stop the
containers

```
docker-compose down
```

So, the recording can be stopped. Then you just need to open the video and drag the bar to find the execution.

---

# CI/CD

Adding integration with Github Actions as CI/CD to execute the tests on each PR that is open. So basically once a PR is
open against `main` branch the suite will be triggered and all the scenarios have to pass in order to enabled the merge
button.

The second yml is a cron that runs every day at 12:00 am so, we can have fresh results at first hour in the morning.

### NOTE:

I'm also using an action, that will generate the allure report and publish it in GH Pages keeping the execution history.
This action uses my personal Access token to push the assets to directly to GH Pages, by keeping the history in folders
named after the build number. The GH pages will render the index.html (it can take up to a min to reflect the latest)

### The url to check the report is `https://pfadiaz.github.io/ultra-test-automation/`

On the other hand, if you are running your test locally with Docker or with your computer's browser, you can also see
the allure report by doing:

```
npm run report:open
```

This will show up an html with the test results. You can see trends and graph. But, there is a catch, in order to see
the execution history, don't forget to run:

```
report:history
```

This script will persist the execution so you can see the history. (GH Actions does it for you automatically via GH
Pages)
