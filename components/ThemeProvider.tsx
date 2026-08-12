// ThemeProvider component that wraps the application and provides theme context using next-themes
// The component uses the NextThemesProvider from next-themes to manage the theme state and provide a context for the application. It allows for switching between light and dark themes, with the default theme set to light. The enableSystem option is set to false, meaning that the theme will not automatically switch based on the user's system preferences. The disableTransitionOnChange option is set to true, which prevents transitions when changing themes, providing a smoother user experience. The children prop allows for any nested components to be wrapped within the ThemeProvider, ensuring that they have access to the theme context.
// The ThemeProvider component is designed to be used at the root level of the application, typically in the _app.tsx or _app.js file, to ensure that all components have access to the theme context. It provides a consistent and centralized way to manage themes across the application, making it easy to implement dark mode and other theme-related features.
// The ThemeProvider component is a functional component that takes in a single prop, children, which represents the nested components that will be wrapped within the ThemeProvider. It returns the NextThemesProvider component, which is configured with the specified options for theme management. The ThemeProvider component can be easily integrated into the application by wrapping it around the main application component or specific sections of the application where theme context is needed.

'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ReactNode } from 'react';

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
