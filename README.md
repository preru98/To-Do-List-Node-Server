# Introduction

## Check out the currently running version - http://listons-app.s3-website.ap-south-1.amazonaws.com/s

Listons is a simple application for productive people to trace their action items. This application let user create a category(List), and then create items in it. Items represents task Actions, which have further properties like, priority, status, description.


# Features

## List visibility
User can view all the lists created by them. If there are no lists, user is prompted to create one list to get started :)

## Create List
User can create list to segregate similar tasks at the same place, by just giving the name of the required list.

## Item visibility
User can view all the items created by them under a list. If there are no items, user is prompted to create one to get started with the subjected list. 

## Create Items
User can create items. Each item is associated with a list. User can click on an existing list and create item, by giving the title, description, initial status, priority.

## Toggle Status
Once user is done with the task, user can toggle the status of the task, by clicking on the status. Color of the item is also changed to depict the same function. 

# How it works

## Tech Stack
The frontend is built using React Library.
The Backend is built in Node Js + Express.
The Database (Cloud) used is MongoDb Atlas. 
Docker is used for containerizing the app.

## Architecture
The frontend is deployed on S3 with static website hosting. 
The backend runs in a docker container on an EC2 instance running Amazon Ubuntu, and container orchestration is handled by Elastic Beanstalk. 

## Containerization
1. Docker Compose: To describe the desired state of the listons app. It will be required to deploy and manage the app.
2. DockerFile: Contains instructions for docker to build the app and its dependencies into container image. It allows us to define runtime arguments in standardized YAML file. 

## CI/CD & Deployment
1. Github actions works as the CI/CD pipelines. Specified steps in my workflows directory in the source code, to instantiate on every code push.
2. It exceutes the steps mentioned in the cicd.yml file as jobs. 
3. It automatically builds the backend docker images, and ships it to the AWS ECR to load the new docker image. 
4. ECR then ships this latest image to AWS EBS to build and run this on AWS EC2 unbuntu instance. 
5. There are also no plaintext AWS keys anywhere in the code, all of them being stored in github actions secrets.
6. Both the latest running, and pushed build is secured with this flow to ensure at any point, application does not stops working.
7. If the pushed build fails, the application will keep running with the last working build.

## Clean Code
1. Clean code architecture is used, Controllers logic is completely isolated from DB operations. 
2. Every Model in the server has its own adapter, which can be plugged in with the controller. 
3. Since the project functionality was too small, only two layers are kept for entire end to end functionality
    3. A. Data Layer:  Responsible for fetching data, and carry out business logic.
    3. B. Controller/Routes: Responsible for comprehending the request, and plug into adapter for required functionality.
4. Every DB Model is validated using Mongoose Schema.
5. This is done, to keep the quality of the code and make it more maintainable, easy debugging, easy testing, extensibility.


## Unit Testing
1. To ensure backend APIs/ Adpaters are working absolutely fine, and easy to debug on every code push.
2. Jest framework is used for unit testing.
3. Mongo-Memory-Server is used to store test data, this step ensures, the crud of Models wrt application as well as lightweight.
4. This is done, to keep the quality of the code and make it more maintainable, easy debugging, easy testing, extensibility.

# Enhancements/Bugs
0. CI/CD for FE in similar way. Currently it is deployed on S3. It’s CI CD can be build by creating GitHub workflow using: npm run build & aws s3 sync build/ s3://**
1. Unit tests for both frontend and backend(only few scenarios covered here)
2. Improving frontend code quality
3. Enable priority toggle. This functionality is completed in BE, but no yet enabled in FE. This is a small effort.
8. Right now, all the URLs are hardcoded (DB).
9. Load all lists in the beginning (maybe via pagination)
6. UI can be better.
7. Indexes in DB can be created.
8. Validation from front end side. Ex: Priority should be mandatory or default set.
9. Name of list should be unique
10. Error Componet to handle errors from backend and unknown errors.
11. Directory for constant- text, URL, etc
12. Ghost comments for function prototype
13. Logging system.