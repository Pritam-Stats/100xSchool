<center>
<h1>Notes on Authentication - Week 9</h1>
</center>


# 1. What is Authentication?
Authentication is the process of letting users signup/signin into websites via `username` / `password` or using SSO (single sign on)

<img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fd339b9a4-75d8-4b25-9c72-89fc0a3a9698%2FScreenshot_2024-03-19_at_10.48.45_PM.png?table=block&id=6a514582-2f8b-445c-8c90-2106af58aafe&cache=v2" alt="Your long page image" style="max-width: 100%; border-radius: 10px; display: block; margin-left: auto; margin-right: auto;">


--- 
# 2. Authentication using jwt + localstorage
## 2.1. Signup

<img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F093def16-4d37-45cc-8c3b-2181de3b4b11%2FScreenshot_2024-03-19_at_10.56.57_PM.png?table=block&id=7a013516-7335-4a99-9bd4-7afde75ad2df&cache=v2" alt="Your long page image" style="max-width: 100%; border-radius: 10px; display: block; margin-left: auto; margin-right: auto;">


## 2.2. Signin

<img src= "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fbaf643a5-081c-40e0-9396-e533f6fdd811%2FScreenshot_2024-03-19_at_10.57.51_PM.png?table=block&id=476b27a9-bfa3-4fd0-b9ab-ed3584bb5ca6&cache=v2" alt="Your long page image" style="max-width: 100%; border-radius: 10px; display: block; margin-left: auto; margin-right: auto;">

## 2.3. Auth requests

<img src= "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fbd1382a8-7840-4fa0-9fa2-46c106e6d51a%2FScreenshot_2024-03-19_at_11.02.20_PM.png?table=block&id=6d9f8074-2019-4dd6-9303-5d43870c5f8f&cache=v2" alt="Your long page image" style="max-width: 100%; border-radius: 10px; display: block; margin-left: auto; margin-right: auto;">

---

# 3. Authentication using cookies (Part 1)

## 3.1. **What are cookies**

Cookies in web development are small pieces of data sent from a website and stored on the user's computer by the user's web browser while the user is browsing. They are designed to be a reliable mechanism for websites to remember things (very similar to local storage)

1. **Session Management:** Cookies allow websites to identify users and track their individual session states across multiple pages or visits.
2. **Personalization:** Websites use cookies to personalize content and ads. For instance, cookies might store information about a user's preferences, allowing the site to tailor content or advertisements to those interests.
3. **Tracking:** Cookies can track users across websites, providing insights into browsing behavior. This information can be used for analytics purposes, to improve website functionality, or for advertising targeting.
4. **Security:** Secure cookies can be used to enhance the security of a website by ensuring that the transmission of information is only done over an encrypted connection, helping to prevent unauthorized access to user data.

We will be focussing on point `4`

## 3.2. **Why not local storage?**

Cookies and LocalStorage both provide ways to store data on the client-side, but they serve different purposes and have different characteristics.

1. Cookies are send with every request to the website (by the browser) (you don’t have to explicitly add a header to the fetch call)
This point becomes super important in Next.js, we’ll see later why

💡

Ref - https://github.com/100xdevs-cohort-2/paytm/blob/complete-solution/frontend/src/pages/SendMoney.jsx#L45

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fcf9c2d99-0203-4f65-8207-6aa217c0e413%2FScreenshot_2024-03-20_at_1.15.25_AM.png?table=block&id=cec01709-9955-4960-bd43-be18df426582&cache=v2)

1. Cookies can have an expiry attached to them
2. Cookies can be be restricted to only `https` and to certain `domains`


---

# 4. Authentication with cookies (Part 2)

## 4.1. **Signup**

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fac36b43f-7f79-4ab0-b842-8a082b131359%2FScreenshot_2024-03-20_at_1.21.29_AM.png?table=block&id=ddecc866-0bd1-4cb8-b7d2-a2f7db2db3e6&cache=v2)

## 4.2. **Signin**

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F072cd6a1-fc71-4afb-9736-c944d57ba5bd%2FScreenshot_2024-03-20_at_1.22.57_AM.png?table=block&id=e7580417-114f-4bcc-b28a-e2cc9d280506&cache=v2)

## 4.3. **Auth endpoints**

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F4890bfd6-ac40-4570-a6dc-4d8a2f2a1d94%2FScreenshot_2024-03-20_at_1.20.23_AM.png?table=block&id=d1559666-6bec-4c67-adfc-f0bcae0d5175&cache=v2)

You don’t need to explicitly set the `cookie` header in the browser. It’s automatically set by the browser in every request

---


# 5. Properties of cookies

## 5.1. **Types of cookies**

1. Persistent - Stay even if u close the window
2. Session - Go away after the window closes
3. **Secure - S**ent only over secure, encrypted connections (HTTPS).

## 5.2. **Properties of cookies**

- HttpOnly - Can not be accessed by client side scripts
- **SameSite - Ensures cookies are not send on cross origin requests**
1. Strict
2. Lax - Only GET requests and on `top level navigation`
3. None

Ref - [https://portswigger.net/web-security/csrf/bypassing-samesite-restrictions#:~:text=SameSite is a browser security,leaks%2C and some CORS exploits](https://portswigger.net/web-security/csrf/bypassing-samesite-restrictions#:~:text=SameSite%20is%20a%20browser%20security,leaks%2C%20and%20some%20CORS%20exploits).

- **Domains** - You can also specify what all domains should the cookie be sent from

## 5.3. **CSRF attacks**

Cross site request forgery attacks were super common because of cookies and hence the `SameSite` attribute was introduced

Let’s see a few cases

## 5.4. **SameSite: none**

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F52048760-3629-4eb3-a693-2fe32a29008b%2FScreenshot_2024-03-20_at_4.20.31_PM.png?table=block&id=e7ad4677-b395-4ff9-8fa0-8447137d5243&cache=v2)

## 5.5. **SameSite: Strict**

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fe9ae6351-838a-4aa5-90b4-8621ecd66051%2FScreenshot_2024-03-20_at_4.20.44_PM.png?table=block&id=4bd944b9-8b92-4556-adbc-5842e6bb042d&cache=v2)

**But there’s a problem -**

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F9bb322e2-f663-480b-b121-a694d7a1d75d%2FScreenshot_2024-03-20_at_4.21.20_PM.png?table=block&id=95e31011-bb5d-4ccf-9684-ff901ace15d5&cache=v2)

## 5.6. **SameSite: Lax**

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fe2e9b1a7-db2d-4f5d-89ab-f7dc3b6e75b6%2FScreenshot_2024-03-20_at_4.21.28_PM.png?table=block&id=10e76972-38aa-4e5f-a9d5-17de44ebd6e6&cache=v2)


---

# 6. Example in Express (Backend)

1. Initialize an empty TS project

```jsx
npm init -y
npx tsc --init
```

1. Update rootDir and outDir

```jsx
"roodDir": "./src"
"outDir": "./dist"
```

1. Add required libraries

```jsx
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import jwt, { JwtPayload } from "jsonwebtoken";
import path from "path";
```

1. Initialize express app, add middlewares

```jsx
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}));
```

1. Add a dummy signin endpoint

```jsx
app.post("/signin", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    // do db validations, fetch id of user from db
    const token = jwt.sign({
        id: 1
    }, JWT_SECRET);
    res.cookie("token", token);
    res.send("Logged in!");
});
```

1. Add a protected backend route

```jsx
app.get("/user", (req, res) => {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
    // Get email of the user from the database
    res.send({
        userId: decoded.id
    })
});
```

1. Add a logout route

```jsx

app.post("/logout", (req, res) => {
    res.cookie("token", "ads");
    res.json({
        message: "Logged out!"
    })
});
```

1. Listen on port 3000

```jsx

app.listen(3000);
```

Code - https://github.com/100xdevs-cohort-2/week-16-auth-1


---

## 6.1. Frontend in react

- Initialize an empty react project
- Add a `signin` page

```jsx
import { useState } from "react"
import { BACKEND_URL } from "../config"
import axios from "axios"

export const Signin = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return <div>
        <input onChange={(e) => {
            setUsername(e.target.value);
        }} type="text" placeholder="username" />
        <input onChange={(e) => {
            setPassword(e.target.value);
        }} type="password" placeholder="password" />
        <button onClick={async () => {
            await axios.post(`${BACKEND_URL}/signin`, {
                username,
                password
            }, {
                withCredentials: true,
            });
            alert("you are logged in")
        }}>Submit</button>
    </div>
}
```

- Add a `user` page

```jsx
import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

export const User = () => {
    const [userData, setUserData] = useState();

    useEffect(() => {
        axios.get(`${BACKEND_URL}/user`, {
            withCredentials: true,
          })
            .then(res => {
                setUserData(res.data);
            })
    }, []);

    return <div>
        You're id is {userData?.userId}
        <br /><br />
        <button onClick={() => {
            axios.post(`${BACKEND_URL}/logout`, {}, {
                withCredentials: true,
            })
        }}>Logout</button>
    </div>
}
```

- Add routing

```jsx
import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signup } from './components/Signup';
import { Signin } from './components/Signin';
import { User } from './components/User';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/signup"} element={<Signup />} />
        <Route path={"/signin"} element={<Signin />} />
        <Route path={"/user"} element={<User />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
```

Code - https://github.com/100xdevs-cohort-2/week-16-auth-1


----

# 7. Frontend from express

1. Add an index.html file in src folder of backend

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
</head>
<body>

<input id="username" type="text" placeholder="username" />
<input id="password" type="password" placeholder="password" />
<button id="loginButton">Submit</button>
<button id="logoutButton">Logout</button>
<div id="userData"></div>

<script>

    document.getElementById('loginButton').addEventListener('click', async () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        try {
            await axios.post(`/signin`, {
                username,
                password
            });
            alert("You are logged in");
        } catch (error) {
            console.error('Login failed:', error);
            alert("Login failed");
        }
    });

    document.getElementById('logoutButton').addEventListener('click', () => {
        axios.post(`/logout`, {}, {
            withCredentials: true,
        }).then(() => {
            console.log('Logged out successfully.');
        }).catch(error => {
            console.error('Logout failed:', error);
        });
    });

    function fetchUserData() {
        axios.get(`/user`, {
            withCredentials: true,
        }).then(response => {
            const userData = response.data;
            displayUserData(userData);
        }).catch(error => {
            console.error('Failed to fetch user data:', error);
        });
    }

    function displayUserData(userData) {
        const userDataDiv = document.getElementById('userData');
        // Example: Assumes userData contains a 'name' and 'email'. Adapt based on your actual user data structure.
        userDataDiv.innerHTML = `<p>Your id is: ${userData.userId}</p>`;
    }
    fetchUserData();
</script>

</body>
</html>
```

1. Add a route that sends this html file

```jsx
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../src/index.html"))
})
```

1. Remove `credentials` from cors

```jsx
app.use(cors());
```

Link - https://github.com/100xdevs-cohort-2/week-16-auth-1


----

<center style = "background-color: grey; border-radius: 10px; padding: 5px">
<h2 style="color: white; font-family: monospace; ">Below are the notes taken by me while practicing the codes</h2>
</center>

----
# 8. Watching Lecture and coding Auth - Day 1

## 8.1. Notes App without DB
- things are working as of now.
```js
    node app.js
```

- Go to
```
 localhost:3000
```

- Buttons are working.

- Go to
```
localhost:3000/getnotes
```
to see all the notes in an array 
- Next to add auth (after learning)

# 9. Day 2 - 18th March
- Implemented the basic signup signin without jwt

## 9.1. Navigation vs API Calls

### 9.1.1. Navigation (Page Change)

Used to move between pages.

```js
window.location.href = "/signup";
```

or

```html
<a href="/signup">Signup</a>
```

* Triggers: `GET /signup`
* Browser expects: **HTML**
* Backend responds with: `res.sendFile(...)`

---

### 9.1.2. API Calls (Data Transfer)

```js
axios.post("/signup", data);
```

* Used for sending/receiving data
* Backend responds with: **JSON**
* Does NOT change page

---

## 9.2. Key Difference

| Purpose           | Method                   |
| ----------------- | ------------------------ |
| Navigate pages    | `window.location`, `<a>` |
| Send/receive data | `axios`, `fetch`         |

---

## 9.3. How `<a>` Works with Backend

```html
<a href="/signuppage">Signup</a>
```

Flow:

```
Click → Browser → GET /signuppage → Backend → HTML → Render
```

### 9.3.1. Important Rule

> If backend cannot handle the URL → ❌ "Cannot GET /route"

---

## 9.4. Route vs File Path

### 9.4.1. ❌ Wrong (if no static serving)

```html
<a href="signup.html">
```

### 9.4.2. ✅ Correct (route-based)

```html
<a href="/signuppage">
```

---

## 9.5. Express Routing

### 9.5.1. Serve HTML page

```js
app.get("/signuppage", (req, res) => {
    res.sendFile(path.join(__dirname, "/frontend/signup.html"));
});
```

---

### 9.5.2. Handle data (API)

```js
app.post("/signup", (req, res) => {
    const { name, username, password } = req.body;
});
```

---

## 9.6. HTTP Methods (Critical)

| Method | Purpose                  |
| ------ | ------------------------ |
| GET    | Fetch page/data          |
| POST   | Send data (signup/login) |

---

## 9.7. Axios Behavior (Very Important)

### 9.7.1. Success (2xx)

```js
const res = await axios.post(...);
```

→ goes to `try` / `.then()`

---

### 9.7.2. Error (4xx, 5xx)

```js
catch (err) {
```

→ goes to `catch`

---

### 9.7.3. Rule

> Non-2xx status → Axios rejects → goes to `catch`

---

## 9.8. Status Codes (Correct Usage)

| Case         | Status         |
| ------------ | -------------- |
| Success      | 200 / 201      |
| User exists  | 409 (Conflict) |
| Bad input    | 400            |
| Unauthorized | 401            |

---

### 9.8.1. Important Principle

> Status code represents **result of request**, not server execution

---

## 9.9. Optional Chaining (`?.`)

```js
err.response?.data?.message
```

* Prevents crash if property missing
* Returns `undefined` safely

---

## 9.10. Error Handling Pattern

```js
try {
    const res = await axios.post("/signup", data);
    alert(res.data.message);
} catch (err) {
    alert(err.response?.data?.message || "Error");
}
```

---

## 9.11. Array `.find()` Method

```js
const user = users.find(u => u.username === username);
```

### 9.11.1. Returns:

* Matching object ✅
* `undefined` if not found ❌

---

### 9.11.2. Example

```js
{
  name: "Pritam",
  username: "pritam123",
  password: "1234"
}
```

---

## 9.12. Extracting Data from Found User

```js
res.json({
    message: "Signin successful",
    name: verified.name
});
```

---

## 9.13. Why `alert()` Cannot Be Styled

* Browser-controlled UI
* Not part of DOM
* Cannot use CSS

### 9.13.1. Alternative:

Create custom alert using `<div>`

---

## 9.14. Core Architecture Insight

You built a:

> **Multi-Page App (MPA)** using Express

Structure:

```
Frontend (HTML) ↔ Backend (Routes) ↔ Data (API)
```

---

## 9.15. Most Important Takeaways

* `<a>` always triggers a **GET request**
* Backend must handle every URL
* Navigation ≠ API calls
* 4xx/5xx → always go to `catch`
* `.find()` returns object or `undefined`
* Separate:

  * Page routes (GET)
  * API routes (POST)

---

## 9.16. Final One-Line Summary

> Browser navigation always goes through backend, and Axios strictly separates success (2xx) and failure (non-2xx) into different execution paths.

---


## 9.17. Implementing JWT - 20th March

**sign up get back a 200 status code but sign in get back a jwt token**

- Who has the token code will have the power to access the account