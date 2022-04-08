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
   <img src="./.github/sample.png" alt="sample" width="300"/>
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

# :rainbow: Critique
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
