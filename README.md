# 💼 Job Application Tracker

A clean and responsive web application for tracking job and internship applications in one place.

Built with **React, TypeScript, Tailwind CSS, and LocalStorage**, this project focuses on practical application management with a polished, SaaS-style user experience.

## ✨ Features

* Add new job applications
* Track company, position, applied date, status, and notes
* Update application status
* Edit and delete applications
* Search applications by company or position
* Filter applications by status
* Dashboard statistics
* Persistent data with LocalStorage
* Toast notifications for user actions
* Responsive design for desktop, tablet, and mobile

### Application Status

* 🟣 Applied
* 🔵 Interview
* 🟢 Offer
* 🔴 Rejected

## 🛠️ Tech Stack

* React
* TypeScript
* Tailwind CSS
* React-Toastify
* LocalStorage
* Vite

## 📸 Preview

> Demo GIF / screenshots will be added after the project is completed.

<!-- Add screenshots or a demo GIF here -->

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/afiaafia/job-tracker.git
```

### 2. Navigate to the project

```bash
cd job-tracker
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at the local development URL shown in your terminal.

## 📁 Project Structure

```text
src/
├── components/
│   ├── Dashboard.tsx
│   ├── ApplicationForm.tsx
│   ├── ApplicationCard.tsx
│   ├── FilterBar.tsx
│   └── UI/
├── hooks/
│   └── useLocalStorage.ts
├── types/
│   └── application.ts
├── utils/
│   └── stats.ts
├── App.tsx
└── main.tsx
```

## 🧩 Core Concepts

This project demonstrates practical use of:

* React components
* Props
* State management with `useState`
* Side effects with `useEffect`
* Controlled forms
* Conditional rendering
* Array methods
* TypeScript interfaces and union types
* LocalStorage persistence
* Responsive UI design
* Reusable components

## 🗺️ Roadmap

### Phase 1 — MVP

* [x] Project setup
* [ ] Application dashboard
* [ ] Add application
* [ ] Edit application
* [ ] Delete application
* [ ] Search and filtering
* [ ] Statistics
* [ ] LocalStorage
* [ ] Toast notifications
* [ ] Responsive UI

### Phase 2 — Enhancements

* [ ] Export applications as JSON
* [ ] Import applications from JSON
* [ ] Application tags
* [ ] Interview date/reminder
* [ ] Charts and analytics
* [ ] Dark/light theme

## 🎯 Goal

The goal of this project is to build a practical, polished application while strengthening modern React and TypeScript development skills.

## 👩‍💻 Author

**Afia Mubassira**

Learning Full Stack Web Development
