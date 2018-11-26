# Full-Stack Engineer Homework

Thanks for taking the time to work through the homework.

## The assignment

We'd like you to build a single page web app for viewing and editing fake Hinge profiles. This project should integrate your knowledge of backend APIs, JS, and HTML/CSS. We don't expect expertise in all three areas, but we'd like to see competency in all three, with a preference for strength in backend and business logic. Feel free to "spike" in whichever areas you feel strongest.

1. A Hinge profile consists of up to six photos, up to three answers to some user-selected questions (from a pre-defined list), and some basic information. Build a list/detail view for Hinge profiles, of any design of your choosing.
2. Add the ability to edit user profiles.

### Bonus

Pick any (or none) of the below.

3. Add authentication.
4. Add the ability to add, edit, remove questions.
5. Add any feature of your choosing.

## Submitting your work

Push your changes up to your fork and let us know when you're finished. Please do not open a pull request against this repo as it will make your code public to anyone else who works on the assignment.

In order to keep assignments as testable as possible, we request that you complete the assignment in one of three ways:
1. Write the backend in Go (the backend language you'll be using day-to-day). There's already a starter project and instructions included in this README.
2. Write the backend in a language of your choice with explicit instructions on how we can set up and run the project.
3. Deploy your work.

## Getting started in Go

1. Install and setup Go
2. Install sqlite if it is not already on your machine
3. Fork this repo and clone in the following location `$GOPATH/src/github.com/Hinge/fullstack-hw`. e.g.:
4. `go get github.com/mattn/go-sqlite3` and `go get github.com/go-chi/chi` to install dependencies
5. `cd fullstack-hw`
6. `go run main.go`

## Notes

This project comes bundled with a sqlite database to give you some starter tables and to allow you to have a fully-functioning app without worrying about deploying and connecting to an external database. You're welcome to modify this DB in whatever way is necessary to complete the assignment or to use another DB (please ensure your project is still runnable). Please be sure to commit and push the `.db` file so we can run your code properly.
