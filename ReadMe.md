# 🎯 Habit Tracker - Daily Task App

<div align="center">

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-5.0.8-orange?style=for-the-badge)
![Material-UI](https://img.shields.io/badge/MUI-7.3.5-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.16-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

**A beautiful, modern habit tracking application built with React, TypeScript, and Zustand**

[Features](#-features) • [Demo](#-demo) • [Installation](#-installation) • [Tech Stack](#-tech-stack) • [Usage](#-usage)

</div>

---

## ✨ Features

### 🎨 **Beautiful Dark Mode UI**
- 🌑 Stunning dark theme with gradient accents
- 💫 Smooth animations and hover effects
- 🎭 Glassmorphism design elements
- 📱 Fully responsive layout for all devices

### 📋 **Habit Management**
- ➕ **Create Habits** - Add new habits with daily or weekly frequency
- ✅ **Track Progress** - Mark habits as complete/incomplete
- 🗑️ **Remove Habits** - Delete habits you no longer need
- 💾 **Persistent Storage** - All data saved in local storage

### 🔥 **Streak Tracking**
- 📈 Track consecutive days of completion
- 🏆 Visual progress bars (30-day goal)
- 🎯 Color-coded progress indicators:
  - 💜 **Purple**: 1-10 days
  - 🟡 **Yellow**: 11-20 days
  - 🟢 **Green**: 21+ days

### 📊 **Statistics Dashboard**
- 📈 **Total Habits** - Number of habits created
- ✅ **Active Habits** - Habits with at least one completion
- 🏅 **Success Rate** - Percentage of active habits
- 🎨 Interactive stat cards with hover animations

### 🎯 **Visual Feedback**
- ✅ Completed habits show with strikethrough text
- 🟢 Green border and checkmark for completed tasks
- 🔥 Fire icons for active streaks
- 💨 Smooth transitions and state changes

---

## 🖼️ Demo

> **Note:** Add screenshots or GIF demo of your application here

```bash
# The app features:
- Clean, modern dark theme interface
- Intuitive habit creation form
- Beautiful habit cards with progress tracking
- Animated statistics dashboard
- Responsive design for mobile and desktop
```

---

## 🚀 Installation

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/WaqarHassan20/zustand-demo.git
   cd zustand-demo/daily-task-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:5173
   ```

---

## 🛠️ Tech Stack

### **Core Technologies**

| Technology | Version | Purpose |
|------------|---------|---------|
| ⚛️ **React** | 19.1.1 | UI Framework |
| 📘 **TypeScript** | 5.9.3 | Type Safety |
| 🐻 **Zustand** | 5.0.8 | State Management |
| 🎨 **Material-UI** | 7.3.5 | Component Library |
| 💨 **Tailwind CSS** | 4.1.16 | Utility-first CSS |
| ⚡ **Vite** | 7.1.14 | Build Tool |

### **Key Libraries**

- **@mui/icons-material** - Beautiful Material Design icons
- **@emotion/react & @emotion/styled** - CSS-in-JS styling
- **zustand/persist** - Local storage persistence middleware

### **Development Tools**

- **ESLint** - Code linting and quality
- **TypeScript ESLint** - TypeScript-specific linting
- **Vite** - Lightning-fast HMR and builds

---

## 📖 Usage

### Creating a Habit

1. Enter a habit name in the text field
2. Select frequency (Daily or Weekly)
3. Click **"Add Habit"** button
4. Your habit appears in the list below

### Tracking Habits

- Click **"Complete"** to mark a habit as done for today
- Click **"✓ Completed"** to unmark a completed habit
- Progress bars show your 30-day streak
- Fire icons 🔥 appear for active streaks

### Managing Habits

- Click **"Remove"** button to delete a habit
- All changes are automatically saved to local storage
- Refresh the page - your data persists!

### Understanding Statistics

- **Total Habits**: Count of all your habits
- **Active Habits**: Habits with at least one completion
- **Success Rate**: Percentage of habits you've engaged with

---

## 🎨 Design Features

### Color Palette

```css
Primary: #6366f1 (Indigo)
Secondary: #ec4899 (Pink)
Success: #10b981 (Green)
Warning: #fbbf24 (Amber)
Error: #ef4444 (Red)
Background: #0f172a (Slate)
```

### Key UI Elements

- 🌈 **Gradient Backgrounds** - Smooth color transitions
- 🎭 **Glassmorphism** - Frosted glass effect with blur
- ⚡ **Micro-interactions** - Smooth hover and click animations
- 📐 **Rounded Corners** - Modern 12px border radius
- 🔮 **Elevation Shadows** - Depth with multiple shadow layers

---

## 🏗️ Project Structure

```
daily-task-app/
├── src/
│   ├── components/
│   │   ├── AddHabitForm.tsx      # Habit creation form
│   │   ├── HabitList.tsx         # Habit cards display
│   │   └── HabitStats.tsx        # Statistics dashboard
│   ├── store/
│   │   └── store.ts              # Zustand state management
│   ├── App.tsx                   # Main application component
│   ├── main.tsx                  # Entry point with theme setup
│   └── index.css                 # Global styles
├── public/                       # Static assets
├── package.json                  # Dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
├── vite.config.ts               # Vite configuration
└── eslint.config.js             # ESLint configuration
```

---

## 🔧 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

---

## 🐻 State Management with Zustand

This app uses **Zustand** for simple, lightweight state management:

```typescript
// Key Features:
✅ No boilerplate code
✅ TypeScript support out of the box
✅ Persist middleware for local storage
✅ Simple, readable API
✅ No context providers needed
```

### Store Structure

- **habits**: Array of habit objects
- **addHabit**: Create new habit
- **removeHabit**: Delete habit by ID
- **toggleHabit**: Mark habit complete/incomplete
- **fetchHabit**: Load mock data (demo purposes)

---

## 💾 Data Persistence

All habit data is automatically saved to **localStorage** using Zustand's persist middleware:

- ✅ Survives page refreshes
- ✅ Works offline
- ✅ No backend required
- ✅ Stored under key: `"Habit-Local-Storage"`

---

## 🎯 Future Enhancements

- [ ] 📅 Calendar view for habit history
- [ ] 🌐 Backend integration with REST API
- [ ] 👤 User authentication
- [ ] 📱 Progressive Web App (PWA) support
- [ ] 🔔 Push notifications for reminders
- [ ] 📊 Advanced analytics and charts
- [ ] 🏷️ Habit categories and tags
- [ ] 🌈 Custom color themes
- [ ] 📤 Export/import habit data
- [ ] 🤝 Social features and sharing

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. 🍴 Fork the repository
2. 🌿 Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. 💾 Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. 📤 Push to the branch (`git push origin feature/AmazingFeature`)
5. 🎉 Open a Pull Request

---

## 📝 License

This project is **open source** and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Waqar Hassan**

- GitHub: [@WaqarHassan20](https://github.com/WaqarHassan20)
- Repository: [zustand-demo](https://github.com/WaqarHassan20/zustand-demo)

---

## 🙏 Acknowledgments

- 🎨 **Material-UI** for beautiful components
- 🐻 **Zustand** for simple state management
- ⚡ **Vite** for blazing-fast builds
- 💨 **Tailwind CSS** for utility classes
- 🎭 Design inspiration from modern web apps

---

## 📧 Contact & Support

If you have any questions or need help:

- 📫 Open an issue on GitHub
- ⭐ Star this repository if you find it helpful
- 🐛 Report bugs via GitHub issues
- 💡 Suggest new features via GitHub discussions

---

<div align="center">

### ⭐ Star this repo if you find it helpful!

**Made with ❤️ by Waqar Hassan**

</div>
