# Twitter Clone

Twitter Clone is the custom clone version of the website Twitter where users can view tweets who they are following and follow/unfollow other users and like their tweets. Uses Redis and cookies for Session management.

<img src="https://portfolio.devganesh.tech/twitterclone.png"/>

**Twitter Clone Demo Link :** https://twitterclone.devganesh.tech

### :wrench: Tools Used

- #### FrontEnd

  - [React](http://reactjs.org/)
  - [Redux](https://redux.js.org/)
  - [Antd](https://ant.design/)
  - [Css](https://ant.design/)

- #### BackEnd
  - [Flask](https://expressjs.com/)
  - [MySQL](https://www.mysql.com/)
  - [Flask-SQLAlchemy](https://flask-sqlalchemy.palletsprojects.com/en/2.x/)
  - [Redis](https://redis.io/)
  - [AWS](https://aws.amazon.com/ses/)

## :v: Contributing

Great!,
after cloning & setting up the local project you can push the changes to your github fork and make a pull request.

---

**local development**

### Step 1: Clone The Repo

Fork the repository. then clone the repo locally by doing -

```bash
git clone https://github.com/Devganesh1998/twitterClone.git
```

### Step 2: Install Dependencies

- #### FrontEnd

  - cd into the directory

    ```bash
    cd FrontEnd
    ```

  - install all the dependencies
    ```bash
    npm install
    ```

- #### BackEnd

  - cd into the directory

    ```bash
    cd BackEnd/twittercloneFlaskServer/
    ```

  - install dependencies

    ```bash
    pip install requirements.txt
    ```

  - Run Flask App
    ```bash
    source venvfront/bin/activate
    export FLASK_APP=run.py
    flask run
    ```

### Step 3: Start Development Server

- Then start the development Server in Frontend/ Folder

  ```
  npm start
  ```

After running the development server the site should be running on https://localhost:3000

## Folder structure

- #### FrontEnd

  ```bash
  .
  ├── build
  │   ├── asset-manifest.json
  │   ├── favicon.ico
  │   ├── index.html
  │   ├── logo192.png
  │   ├── logo512.png
  │   ├── manifest.json
  │   ├── precache-manifest.473a3594190af413ecd62a3fc140240b.js
  │   ├── robots.txt
  │   ├── service-worker.js
  │   └── static
  │       ├── css
  │       │   ├── 2.04ff9426.chunk.css
  │       │   ├── 2.04ff9426.chunk.css.map
  │       │   ├── main.eb77613d.chunk.css
  │       │   └── main.eb77613d.chunk.css.map
  │       └── js
  │           ├── 2.b5a599b1.chunk.js
  │           ├── 2.b5a599b1.chunk.js.LICENSE.txt
  │           ├── 2.b5a599b1.chunk.js.map
  │           ├── main.0bc7a478.chunk.js
  │           ├── main.0bc7a478.chunk.js.map
  │           ├── runtime-main.320c7d46.js
  │           └── runtime-main.320c7d46.js.map
  ├── package.json
  ├── package-lock.json
  ├── public
  │   ├── favicon.ico
  │   ├── index.html
  │   ├── logo192.png
  │   ├── logo512.png
  │   ├── manifest.json
  │   └── robots.txt
  ├── README.md
  └── src
    ├── App.js
    ├── App.test.js
    ├── Components
    │   ├── authComponents
    │   │   ├── LoginForm.jsx
    │   │   └── RegisterForm.jsx
    │   └── HomeComponents
    │       ├── AddTweet.jsx
    │       ├── SideMenu.jsx
    │       ├── TweetCard.jsx
    │       └── UserCards.jsx
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── Pages
    │   ├── AuthPage.jsx
    │   ├── ListAllUsers.jsx
    │   ├── NewsFeed.jsx
    │   └── Profile.jsx
    ├── Redux
    │   ├── AuthReducer
    │   │   ├── action.jsx
    │   │   ├── actionType.jsx
    │   │   └── reducer.jsx
    │   ├── axoisInstance.js
    │   ├── configureStore.jsx
    │   ├── ProfileReducer
    │   │   ├── action.jsx
    │   │   ├── actionType.jsx
    │   │   └── reducer.jsx
    │   └── TweetReducer
    │       ├── action.jsx
    │       ├── actionType.jsx
    │       └── reducer.jsx
    ├── Routing
    │   ├── HomeRouter.jsx
    │   ├── ProtectedRoute.js
    │   └── router.jsx
    ├── serviceWorker.js
    ├── setupTests.js
    └── Styles
        └── Home.module.css

  ```

- #### BackEnd

  ```bash
  .
  ├── app
  │   ├── __init__.py
  │   ├── models
  │   │   ├── followers.py
  │   │   ├── __init__.py
  │   │   ├── likes.py
  │   │   ├── __pycache__
  │   │   │   ├── followers.cpython-38.pyc
  │   │   │   ├── __init__.cpython-38.pyc
  │   │   │   ├── likes.cpython-38.pyc
  │   │   │   ├── tweets.cpython-38.pyc
  │   │   │   └── user.cpython-38.pyc
  │   │   ├── tweets.py
  │   │   └── user.py
  │   ├── __pycache__
  │   │   └── __init__.cpython-38.pyc
  │   ├── routes
  │   │   ├── __init__.py
  │   │   ├── profiles.py
  │   │   ├── __pycache__
  │   │   │   ├── __init__.cpython-38.pyc
  │   │   │   ├── profiles.cpython-38.pyc
  │   │   │   ├── tweets.cpython-38.pyc
  │   │   │   └── User.cpython-38.pyc
  │   │   ├── tweets.py
  │   │   └── User.py
  │   └── services
  │       ├── auth.py
  │       ├── profile.py
  │       ├── __pycache__
  │       │   ├── auth.cpython-38.pyc
  │       │   ├── profile.cpython-38.pyc
  │       │   ├── tweets.cpython-38.pyc
  │       │   └── Users.cpython-38.pyc
  │       ├── tweets.py
  │       └── Users.py
  ├── config.py
  ├── instance
  │   └── config.py
  ├── migrations
  │   ├── alembic.ini
  │   ├── env.py
  │   ├── __pycache__
  │   │   └── env.cpython-38.pyc
  │   ├── README
  │   ├── script.py.mako
  │   └── versions
  │       ├── 108c3eeb7933_.py
  │       ├── 225eb9d17adc_.py
  │       ├── ddd69e0393d2_.py
  │       ├── fefa2a6c2707_.py
  │       └── __pycache__
  │           ├── 108c3eeb7933_.cpython-38.pyc
  │           ├── 225eb9d17adc_.cpython-38.pyc
  │           ├── ddd69e0393d2_.cpython-38.pyc
  │           └── fefa2a6c2707_.cpython-38.pyc
  ├── __pycache__
  │   ├── config.cpython-38.pyc
  │   └── run.cpython-38.pyc
  ├── README.md
  ├── redisInstance
  │   └── __init__.py
  ├── requirements.txt
  └── run.py
  ```
