<p align="center">
   <a href="https://linkedin.com/in/denis-ladeira-814365115/">
      <img alt="Denis Mendonça Ladeira" src="https://img.shields.io/badge/-DenisLadeira-blue?style=flat&logo=Linkedin&logoColor=white" />
   </a>
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/denismend/posterr?color=blue">

  <a href="https://github.com/denismend/posterr/commits/dev_v1">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/denismend/posterr?color=blue">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-gray">
</p>


# Posterr
<p align="center">
  Social media based on Twitter <br />

  <p align="center">
   <img src="./.github/sample.png" alt="sample" width="700"/>
  </p>
</p>

#

# :pushpin: Table of Contents

* [Technologies](#computer-technologies)
* [Features](#rocket-features)
* [How to Run](#construction_worker-how-to-run)
* [Found a bug? Missing a specific feature?](#bug-issues)
* [Contributing](#tada-contributing)
* [License](#closed_book-license)

# :computer: Technologies
This project was made using the follow technologies:

* [Typescript](https://www.typescriptlang.org/)
* [React](https://reactjs.org/)
* [React-Query](https://react-query.tanstack.com/)
* [styled-components](https://styled-components.com/)
* [axios](https://github.com/axios/axios)
* [jest](https://github.com/facebook/jest)
* [testing-library](https://github.com/testing-library/react-testing-library)

# :rocket: Features

* List of all posts, retweets, quote posts (cached by react-query);
* Filter only user posts;
* Add a new post;
* Retweet a post or quote;
* User profile page;
* Follow other users

# :construction_worker: How to run
```bash
# Clone the project on your computer via Download (option Code -> Download ZIP)
    - If you want to do it with Git, make sure you have Git installed,
      follow the link https://git-scm.com/
    - then run the command in terminal:
        $ git clone https://github.com/denismend/posterr.git

# In the terminal or prompt(cmd), access the project root;
   $ cd posterr
```

obs. Make sure you have [Node 17 (stable)](https://nodejs.org/en/) and [npm](https://nodejs.org/en/) 
installed in your computer. You can use [yarn](https://yarnpkg.com) instead npm. We recommend to use stable version.

# :computer: Run Project
```bash
# Install Dependencies
$ yarn

# Run Aplication
$ yarn start

```
Go to http://localhost:3000/ to see the result.

# :test_tube: Run Tests
```bash
# Install dependencies if you didn't
# Run tests
$ yarn test

# Run test coverage
$ yarn test:coverage
```
# :bug: Issues

Feel free to **file a new issue** with a respective title and description on the the [posterr](https://github.com/denismend/posterr/issues) repository. If you already found a solution to your problem, **i would love to review your pull request**!

# :bookmark: Planning
## "reply-to-post"
<br/>

- Questions to Product Manager:

<br/>

```
When do we plan to release this feature?

Are we going to implement it on the retweet page?

Will users be mentioned within the retweet area or in a new field?

Wouldn't it be interesting to implement a way to notify the user?

Are we going to consider this post way to be a Quote Post ?

Will it be possible to mention more than one user?
```
<br/>

- Implementation

<br/>

```
In the database first of all we need to add a string field which mentions users mentioning with @.

It would be extremely important that a search be performed every time a user starts mentioning a user using a debounce when the user is typing.

If we have a notification system we must activate a job in the backend that sent the notification to the mentioned user.

If users were mentioned within the area where the user quotes post, it is necessary for the backend to split those users that are mentioned within the string.

In the interface we could create two tabs. In one we can present the vision we already have and in the other we can present the posts that are replicated.

On the "Post and replies" page we can make the request and implement a pooling and caching of this data with react-query.

```

<br/>

# :rainbow: Critique

<br />

```
Firstly, the UX/UI issue of the application should be greatly improved. We need to review accessibility issues like contrast, hotkeys, improving feedback for fields and buttons, etc.

Search post. We need to make a search in the posts and the replies. However, in the application, the filter we have performs the filtering through the front end. Which would be considerable in some cases. But in this one in particular, it would be interesting to move the filters to the back-end.

In search, I would develop a text field debounce to ease user search. If we did the search through the front-end, it would be interesting to save all the post data in a React-redux store.

We need to re-implement the way we request data. Today, all data is requested. This works when we have little data. But never in an application with a considered user and information base.

Maybe change the architecture we have today to SSR instead of a SPA. Or a new codebase in Remix.run, for example, to make server-side calls and minimize loading times, giving our application a considerable performance.

```

<br/>

# :tada: Contributing

There are many forms to contribute with the project, first of all you can give this github repo a Star.

If you want do help with the code follow the steps bellow

```ps
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.
$ gh repo fork denismend/posterr

# Clone your fork
$ git clone {your-fork-url}
$ cd posterr

# Create a branch with your feature
$ git checkout -b {branch-name}

# Make the commit with your changes
$ git commit -m 'Feat: {feature-name}'

# Send the code to your remote branch
$ git push origin {branch-name}
```

# :closed_book: License

Released in 2022 :closed_book: License

Made with love by [Denis Ladeira](https://github.com/denismend) 🚀.
This project is under the [MIT license](./LICENSE).
