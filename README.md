# reg-frontend

## development

Note: On Windows, both projects need to be checked out with, `git config core.autocrlf input` or they won't build correctly.

### first time

#### Configure access to the GitHub npm registry

One of our dependencies is `@eurofurence/reg-component-library`, which we only publish to the private GitHub packages
registry.

To configure access, obtain a GitHub personal access token with `read:packages` scope permissions. With that, do

```
echo "//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}" >> ~/.npmrc
```

#### Ubuntu 24.04 LTS fun 

The node snap is just ... broken in weird ways. You need to install node the old-fashioned way.

Installing gyp may fail during npm install because it detects you have python,
but on Ubuntu python either points to really old python2, or for newer Ubuntu releases, wonderfully
does not work at all. There's a fix, so python points to python3. 

```
sudo apt-get install python-is-python3
```

Then it also fails to properly report missing build utilities, but some node packages expect certain build tools.

```
sudo apt-get install build-essential
```

#### install gatsby and dependencies

```
npm install -g gatsby-cli
gatsby telemetry --disable

npm install
```

_Note: running node/npm from snaps may not work. Some problem with user detection when installing sharp, where it tries
to install as the wrong user and then runs into permission errors._

#### set up a local dotenv

```
cp .example.env.development .env.development
```

Edit this new file and fill in the env vars with the test env information.

### run locally

```
npm start
```

Then point your browser to http://localhost:8000/register

### server-like installation on localhost

You can run locally together with one or more of the backend services (most likely you'll want at least
reg-attendee-service and reg-payment-service).

See the instructions [here](https://github.com/eurofurence/reg-regsys-classic), as well as the readme's of the
backend services.

Then you can use the system exactly as it is installed on the server by pointing your browser to http://localhost:10000/register

This also lets you avoid any CORS issues because everything is coming from the same domain.

### webpack build and upload to the server (ci)

In `gatsby-config.js`, set the correct `pathPrefix`. Then do

```
PREFIX_PATHS=true npm run build
```

This will generate a full static version of the site into `public`, which you can then tar.gz and upload to the server
for roll-out with a script similar to this one (assuming you have ssh-agent running and have access):

```
# build application with prefix paths as configured
PREFIX_PATHS=true npm run build

# upload and roll out
tar czf public.tgz public
scp public.tgz regtest@reg.eurofurence.org:projects/
ssh regtest@reg.eurofurence.org -t "bash -l -c 'scripts/update-app.sh'"
rm -f public.tgz
```
