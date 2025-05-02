# Update the README with GitHub repository and live site links

github_username = "jimcarlobagoncia"
repo_name = "blog-post-viewer"
live_url = f"https://{github_username}.github.io/{repo_name}"
repo_url = f"https://github.com/{github_username}/{repo_name}"

detailed_readme = f"""# 📘 Blog Post Viewer

A simple React application that fetches and displays blog posts using the [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts) API. The app demonstrates the use of **Axios for HTTP requests**, handles **loading and error states**, and implements an **Error Boundary** to gracefully manage JavaScript runtime errors in the UI.

---

## 🔗 Links

- 🔗 Live Site: [{live_url}]({live_url})
- 📂 GitHub Repository: [{repo_url}]({repo_url})

---

## ✨ Features

- 🔄 Fetches blog posts from a public API using Axios.
- 📄 Displays blog post titles and bodies in a clean UI.
- ⏳ Shows a loading message while fetching data.
- ⚠️ Displays a user-friendly error message if fetching fails.
- 🛡 Catches and handles unexpected UI errors with an Error Boundary.
- 🚀 Deployable to GitHub Pages.

---

## 🛠 Technologies Used

- React
- Axios
- JavaScript (ES6+)
- CSS
- JSONPlaceholder API
- GitHub Pages

---

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone {repo_url}
   cd {repo_name}


