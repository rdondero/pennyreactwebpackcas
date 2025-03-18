# pennyreactwebpackcas

## To run this application on your local computer:

npm install
npm run build
python runserver.py someport

Browse to http://localhost:someport


# pennycas

--------------

## To run this application on a local Mac or Linux computer
## using the Flask test HTTP server:

Issue these commands:

# Install required node modules
npm install

# Build the JavaScript bundle
npm run build

# Create an APP_SECRET_KEY environment variable
export APP_SECRET_KEY=<somesecretkey>

# Run the test server
python runserver.py <someport>

It would be common to define APP_SECRET_KEY in a .env file.

# Browse to the application

Browse to http://localhost:<someport>

You must use "localhost" as the host.  Using the real IP address
of your computer won't work.  Using 127.0.0.1 won't work.

--------------

## To run this application on a local MS Windows computer using
## the Flask test HTTP server:

Issue these commands:

# Install required node modules
npm install

# Build the JavaScript bundle
npm run build

# Create an APP_SECRET_KEY environment variable
set APP_SECRET_KEY=<somesecretkey>

# Run the test server
python runserver.py <someport>

It would be common to define APP_SECRET_KEY in a .env file.

# Browse to the application

Browse to http://localhost:<someport>

You must use "localhost" as the host.  Using the real IP address
of your computer won't work.  Using 127.0.0.1 won't work.

---------------

## To run this application on Render:

(1) Deploy the application to Render as usual.

(2) Configure the application such that it has an environment variable
whose name is APP_SECRET_KEY and whose value is some secret key.

(3) Ask OIT to place your Render app (as identified by its URL) on
the Princeton CAS white list.  The COS 333 "Princeton Data Sources"
web page describes how to do that.

# Browse to the application

Browse to https://<yourappname>.onrender.com
