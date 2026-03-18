## Notes App without DB
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

# Day 2 - 18th March
- Implemented the basic signup signin without jwt

## 1. Navigation vs API Calls

### Navigation (Page Change)

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

### API Calls (Data Transfer)

```js
axios.post("/signup", data);
```

* Used for sending/receiving data
* Backend responds with: **JSON**
* Does NOT change page

---

## Key Difference

| Purpose           | Method                   |
| ----------------- | ------------------------ |
| Navigate pages    | `window.location`, `<a>` |
| Send/receive data | `axios`, `fetch`         |

---

## 2. How `<a>` Works with Backend

```html
<a href="/signuppage">Signup</a>
```

Flow:

```
Click → Browser → GET /signuppage → Backend → HTML → Render
```

### Important Rule

> If backend cannot handle the URL → ❌ "Cannot GET /route"

---

## 3. Route vs File Path

### ❌ Wrong (if no static serving)

```html
<a href="signup.html">
```

### ✅ Correct (route-based)

```html
<a href="/signuppage">
```

---

## 4. Express Routing

### Serve HTML page

```js
app.get("/signuppage", (req, res) => {
    res.sendFile(path.join(__dirname, "/frontend/signup.html"));
});
```

---

### Handle data (API)

```js
app.post("/signup", (req, res) => {
    const { name, username, password } = req.body;
});
```

---

## 5. HTTP Methods (Critical)

| Method | Purpose                  |
| ------ | ------------------------ |
| GET    | Fetch page/data          |
| POST   | Send data (signup/login) |

---

## 6. Axios Behavior (Very Important)

### Success (2xx)

```js
const res = await axios.post(...);
```

→ goes to `try` / `.then()`

---

### Error (4xx, 5xx)

```js
catch (err) {
```

→ goes to `catch`

---

### Rule

> Non-2xx status → Axios rejects → goes to `catch`

---

## 7. Status Codes (Correct Usage)

| Case         | Status         |
| ------------ | -------------- |
| Success      | 200 / 201      |
| User exists  | 409 (Conflict) |
| Bad input    | 400            |
| Unauthorized | 401            |

---

### Important Principle

> Status code represents **result of request**, not server execution

---

## 8. Optional Chaining (`?.`)

```js
err.response?.data?.message
```

* Prevents crash if property missing
* Returns `undefined` safely

---

## 9. Error Handling Pattern

```js
try {
    const res = await axios.post("/signup", data);
    alert(res.data.message);
} catch (err) {
    alert(err.response?.data?.message || "Error");
}
```

---

## 10. Array `.find()` Method

```js
const user = users.find(u => u.username === username);
```

### Returns:

* Matching object ✅
* `undefined` if not found ❌

---

### Example

```js
{
  name: "Pritam",
  username: "pritam123",
  password: "1234"
}
```

---

## 11. Extracting Data from Found User

```js
res.json({
    message: "Signin successful",
    name: verified.name
});
```

---

## 12. Why `alert()` Cannot Be Styled

* Browser-controlled UI
* Not part of DOM
* Cannot use CSS

### Alternative:

Create custom alert using `<div>`

---

## 13. Core Architecture Insight

You built a:

> **Multi-Page App (MPA)** using Express

Structure:

```
Frontend (HTML) ↔ Backend (Routes) ↔ Data (API)
```

---

## 14. Most Important Takeaways

* `<a>` always triggers a **GET request**
* Backend must handle every URL
* Navigation ≠ API calls
* 4xx/5xx → always go to `catch`
* `.find()` returns object or `undefined`
* Separate:

  * Page routes (GET)
  * API routes (POST)

---

## Final One-Line Summary

> Browser navigation always goes through backend, and Axios strictly separates success (2xx) and failure (non-2xx) into different execution paths.

---


## Next - Implement JWT

