
# Messenger App

## Overview

This Messenger App is a simple React application that simulates a chat interface allowing a user to select a friend from a list and chat with them. This project was developed as part of a take-home assignment for a frontend coding interview. The application is built with React and uses Material-UI for styling.

## Features

* Friend List: Display a list of friends and select a friend to chat with.
* Chat Window: Allows users to send messages and view them instantaneously.
* No Back-end Interaction: The application does not interact with a backend server nor does it persist chat history beyond the session.

## Installation

To get this project up and running on your local machine, follow these steps:

**Clone the repository:**

```bash
git clone https://github.com/[your-username]/messenger_cognite.git
cd messenger_cognite
```

**Install dependencies:** 
```bash
npm install
```

**Start the development server:**
```bash
npm start
```
This command runs the app in development mode. Open http://localhost:3000 to view it in your browser.

## Technology Stack

* **React:** A JavaScript library for building user interfaces.
* **Material-UI:** A popular React UI framework that offers ready-to-use components that are customizable and accessible.
* **Local Storage:** Used for temporary storage of messages and friend selections.

## Structure
* **App.js:** The main React component that houses the overall layout and state management of the application.
* **FriendList.js:** Manages and displays the list of friends.
* **ChatWindow.js:** Manages the chat interface, including input and display of messages.
* **App.css:** Contains additional CSS for basic styling.
