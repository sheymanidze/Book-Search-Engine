# Book-Search-Engine

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Table of contents
 * [General info](#General-Info)
 * [Specifics](#Specifics)
 * [Deployment of application](#Deployment-of-application)
 * [Application Code](#Application-Code)
 * [Screenshots](#Screenshots)
 * [Future Developments](#Future-Developments)


 # General Info

   Application allows user to search for a book, saved it, view it and delete if needed. 


 # Specifics

   * Existing RESTful API was replaced with Apollo Server, and refactored to GraphQL API
   * All excisting authentication middleware were modifyed in order to work in context of a  GraphQL API
   * Apollo Provider was created to communicate request with an Apollo Server


 # Deployment of application

   To run a project, please follow the link 

   [https://book-search-engine-react.herokuapp.com/](https://book-search-engine-react.herokuapp.com/)



 # Application Code

   To view application code, please follow the link 

   [https://github.com/sheymanidze/Book-Search-Engine](https://github.com/sheymanidze/Book-Search-Engine)


 # Screenshots

   ![]()


 # Future Developments
 
   * User can create a list with the books that already have been read-“read” section. When the user search for a book and the book in the user's list (“read” section) it won’t show up in the search result