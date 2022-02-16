# Overview:
## Technologies: 
 - React for frontend UI
 - REST API for backend endpoints using json format
 - Swagger(OpenAPI) as tool for defining REST API
 - Stackblitz or other local tools for implementing code
 - Figma for design mockups
 - Github as repository with version control and automatic deployment tool

# Usage:
## React: 
 - The frontend requires node version 16.x.x LTS to work properly.
 - To install, build and start the frontend 'yarn' is used as package manager. Do not use 'npm' instead, it will mess up the dependencies.
	
## REST API:
 - Uses OpenAPI as definition language. Swagger is a tool where you can easily create API documentation.
 - The API defines how to receive data from the backend, like events. 
 - Images from the API can be found and acessed via the relative path '/images/'.
 - Information on the API definitions can be seen here: [https://www.73743355.xyz/api](https://www.73743355.xyz/api)
 - If more endpoints are required make an issue with the needed data or functionality.
 - The API provides a test database, however you do not have to consider it or change anything on the frontend side. The backend is able to difrentiate a call for testing or an actual call from the deployed website. There is an endpoint '/rest-test-db' for resetting the test database, which is only useful for test purposes.

## Github: 
 - The 'main' branch is protected and is not supposed to be pushed on. This branch will be used as the version for the current frontend deployed on the website. This branch will automatically deploy any changes on the server.
 - Another branch 'development' is used for developing and works as a stage before finaly deployment. This branch also shouldnt be pushed on but it is not protected. This branch will automatically deploy a test version on the server which can be acessed here: [https://test-version.73743355.xyz](https://test-version.73743355.xyz) You will need to enter credentials to view the site. Request these credentials if you do not have them but do not share them with anyone else. 
 - Create a new branch if you want to push changes on the repository and create a merge request which should be approved by an admin. Stackblitz has a simple way to push changes on a new branch.
 - You must not put any sensitive data here, as this repository is public and everyone can access it. 

## Stackblitz:
 - You can work on the project here: [https://stackblitz.com/edit/react-jduf5s?file=src/App.js](https://stackblitz.com/edit/react-jduf5s?file=src/App.js)
 - It is not a perfect tool but for most things it should be good enough to work on the website. If problems occur try it on a local build or ask someone else for help.

## Other:
 - For more information or help just make an issue or ask directly.
