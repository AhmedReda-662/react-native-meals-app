# React Native Meals App

A comprehensive mobile application built with React Native that allows users to browse, search, and manage their favorite meals across different categories. The app features a modern UI, meal ratings system, and an intuitive navigation experience.

## Features

- 📱 Cross-platform (iOS & Android) support
- 🔍 Search functionality for meals
- ⭐ Meal rating system
- ❤️ Favorites management
- 📁 Category-based meal organization
- 🎨 Custom fonts (Exo2) integration
- 🎯 Drawer navigation for easy access
- 🌓 Consistent theming and styling

## Tech Stack

- React Native
- Expo
- Redux Toolkit (for state management)
- React Navigation (Native Stack & Drawer)
- Expo Font
- React Native Reanimated
- React Native Gesture Handler

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS) or Android Studio (for Android)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/AhmedReda-662/react-native-meals-app.git
```

2. Install dependencies:

```bash
cd react-native-meals-app
npm install
```

3. Start the development server:

```bash
npm start
```

4. Run on your preferred platform:

- Press `a` for Android
- Press `i` for iOS
- Press `w` for web

## Project Structure

```
├── assets/
│   ├── fonts/
│   │   ├── Exo2-Italic-VariableFont_wght.ttf
│   │   └── Exo2-VariableFont_wght.ttf
│   └── [Other assets]
├── components/
│   ├── CategoryGridTile.js
│   ├── IconButton.js
│   ├── MealDetails.js
│   ├── MealItem.js
│   ├── RatingStars.js
│   ├── SearchBar.js
│   └── [Other components]
├── screens/
│   ├── CategoriesScreen.js
│   ├── FavoriateScreen.js
│   ├── MealDetailsScreen.js
│   └── MealsOverviewScreen.js
└── store/
    ├── context/
    │   └── favorites-context.js
    └── redux/
        ├── favoriteSlice.js
        ├── ratingsSlice.js
        └── store.js
```

## Features in Detail

### Search Functionality

- Real-time search through meals
- Responsive search bar with intuitive UI
- Search across all meal categories

### Rating System

- Rate meals on a star-based scale
- View average ratings for each meal
- Track number of ratings per meal

### Favorites Management

- Add/remove meals from favorites
- Dedicated favorites screen
- Persistent storage of favorite meals

### Navigation

- Drawer navigation for main screens
- Stack navigation for detailed views
- Smooth transitions between screens

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details
