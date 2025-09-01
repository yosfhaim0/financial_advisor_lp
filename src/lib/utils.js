import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// Form validation utilities
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

export const validatePhone = (phone) => {
  const re = /^[+]?[0-9\s\-()]{9,}$/
  return re.test(phone)
}

export const validateName = (name) => {
  return name.trim().length >= 2
}

// Local storage utilities for form data
export const saveFormData = (data) => {
  try {
    const existingData = JSON.parse(localStorage.getItem('landingPageLeads') || '[]')
    const newLead = {
      ...data,
      id: Date.now(),
      timestamp: new Date().toISOString()
    }
    existingData.push(newLead)
    localStorage.setItem('landingPageLeads', JSON.stringify(existingData))
    return true
  } catch (error) {
    console.error('Error saving form data:', error)
    return false
  }
}

export const getFormData = () => {
  try {
    return JSON.parse(localStorage.getItem('landingPageLeads') || '[]')
  } catch (error) {
    console.error('Error getting form data:', error)
    return []
  }
}
