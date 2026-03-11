# HTTP Server - Intro (Theory)
- what's http protocol
- request
- response body
- req res model
- body/payload
- methods
  - GET
  - POST
  - PATCH
  - PUT
  - DELETE
- Domain name/IP
- status codes
- HTTP Clients
  - curl
  - browsers
  - postman/requestly

# HTTP Deep Dive
## Create an HTTP Server - Express
- Practice Code: [Calculator with Backend](/backend/calculator-http-server/)
- Technically we could do this using DOM only using onclick and all.
<img src="images/3-create-an-http-server.jpeg" alt="Your long page image" style="max-width: 60%; border-radius: 10px; display: block; margin-left: auto; margin-right: auto;">
---

#### The misconception
- While building the calculator backend.
- It is very much possible to create the calculator app using the DOM manipulation.
- But that would make the app only a **client side** application, what that mean is, anyone can read the logic of the app how it’s get built, since the frontend will be rendered to the browser.
- So when we are building the backend we are keeping the core logic of the app hidden.
- But we need our frontend to talk to our backend, the frontend as a client and the backend as a server.
- That is where Fetch api comes in
---

## Fetch API
- This is how frontend talks to backend using the endpoints
<img src="images/ss-FetchAPI.webp" alt="Your long page image" style="max-width: 60%; border-radius: 10px; display: block; margin-left: auto; margin-right: auto;">

- There are 2 high level ways a browser can send requests to an HTTP server:
**1. From the browser URL (Default GET request):**
- When you type a URL into the browser’s address bar and press Enter, the browser sends an HTTP GET request to the server. This request is used to retrieve resources like HTML pages, images, or other content.

**2. From an HTML form or JavaScript (Various request types):**
- HTML Forms: When a user submits a form on a webpage, the browser sends an HTTP request based on the form’s method attribute, which can be GET or POST. Forms with method="POST" typically send data to the server for processing (e.g., form submissions).

- **JavaScript (Fetch API):** JavaScript running in the browser can make HTTP requests to a server using APIs the fetch API. These requests can be of various types (GET, POST, PUT, DELETE, etc.) and are commonly used for asynchronous data retrieval and manipulation (e.g., AJAX requests).

### Fetch request examples
Server to send the request to - https://jsonplaceholder.typicode.com/posts/1 (GET request)

```html
<!DOCTYPE html>
<html>

<body>
  <div id="posts"></div>
  <script>
    async function fetchPosts() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const json = await res.json();
      document.getElementById("posts").innerHTML = json.title;
    }

    fetchPosts();
  </script>
</body>

</html>

```

- till now we have built this, a functional backend of a calculator app
<img src="images/image.png" alt="Your long page image" style="max-width: 60%; border-radius: 10px; display: block; margin-left: auto; margin-right: auto;">

--- 


#### Fetch req sending using post method and the body or payload
- we have already sent the requests using params query. now let's try to send the req using payload
- when using body, we have to send or post something from the client to the backend directly so we have to use app.post to read the data from the post method.


### Recap and concept clearance for the topics done till now (Using GPT)
Yes — your intuition is correct. When you **send data in the request body (payload)**, you typically use the **POST method**. Let’s clarify how the different approaches work in backend development with **Express**.

---

#### 1️⃣ Sending Data via Path Parameters (GET)

Data is part of the **URL path**.

Example request:

```
GET /add/5/7
```

Express route:

```javascript
app.get("/add/:a/:b", (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    res.send((a + b).toString());
});
```

Here the values come from:

```
req.params
```

Example URL:

```
http://localhost:3000/add/5/7
```

---

#### 2️⃣ Sending Data via Query Parameters (GET)

Data is still in the **URL**, but after `?`.

Example request:

```
GET /add?a=5&b=7
```

Express route:

```javascript
app.get("/add", (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    res.send((a + b).toString());
});
```

Data comes from:

```
req.query
```

Example URL:

```
http://localhost:3000/add?a=5&b=7
```

---

#### 3️⃣ Sending Data via Body / Payload (POST)

Now the data is **not visible in the URL**. (IMP)
It is sent in the **request body**, which is why **POST is normally used**.

Example request body (JSON):

```json
{
  "a": 5,
  "b": 7
}
```

Express server:

```javascript
const express = require("express");
const app = express();

app.use(express.json()); // important

app.post("/add", (req, res) => {
    const a = req.body.a;
    const b = req.body.b;
    res.send((a + b).toString());
});

app.listen(3000);
```

Data comes from:

```
req.body
```
#### the differences in the browser what actually happens when using body (payload) and query params
<div style="display: flex; justify-content: center; gap: 10px">
  <img src="images/ss-sumpayload.png" alt="First Image" style="width: 33%;"/>
  <img src="images/ss-sumheaders.png" alt="Second Image" style="width: 33%;"/>
  <img src="images/multiply-queryparams.png" alt="Third Image" style="width: 33%;"/>
</div>


---

## 4️⃣ Why POST is Used for Payload

Technically **GET could send a body**, but in practice:

* Browsers **do not support GET body properly**
* APIs conventionally use:

| Method | Purpose                        |
| ------ | ------------------------------ |
| GET    | Retrieve data                  |
| POST   | Send data / create computation |
| PUT    | Update data                    |
| DELETE | Delete data                    |

So for your **calculator backend**, a common API would be:

```
POST /add
POST /multiply
POST /divide
```

---

### 5️⃣ Example Without Axios (HTML Form)

You can send POST body using a simple HTML form. (We used fetch by the way)

```html
<form action="/add" method="POST">
  <input name="a" />
  <input name="b" />
  <button type="submit">Add</button>
</form>
```

***Then in Express:***

```javascript
app.use(express.urlencoded({ extended: true }));

app.post("/add", (req, res) => {
    const a = Number(req.body.a);
    const b = Number(req.body.b);
    res.send((a + b).toString());
});
```

---

✅ **Summary**

| Method      | Data Location   | Express Object |
| ----------- | --------------- | -------------- |
| GET (path)  | `/add/5/7`      | `req.params`   |
| GET (query) | `/add?a=5&b=7`  | `req.query`    |
| POST (body) | request payload | `req.body`     |

So yes — **when sending payload/body, we normally use POST.**

---



### Using axios (external library)

```html
<!DOCTYPE html>
<html>

<head>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.7.6/axios.min.js"></script>
</head>

<body>
  <div id="posts"></div>
  <script>
    async function fetchPosts() {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
      document.getElementById("posts").innerHTML = res.data.title;
    }

    fetchPosts();
  </script>
</body>

</html>
```

