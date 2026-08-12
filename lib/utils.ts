// Utility functions for class name manipulation
// This file provides a utility function `cn` that combines class names using the `clsx` library and merges them with Tailwind CSS classes using the `tailwind-merge` library. It allows for dynamic class name generation in a clean and efficient manner.

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
