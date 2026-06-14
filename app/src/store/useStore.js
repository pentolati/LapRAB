import { create } from 'zustand'

const AUTH_KEY = 'laprab_user'

function loadUser() {
  try {
    const raw = localStorage.getItem(AUTH_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export const useStore = create((set) => ({
  user: loadUser(),
  login: (user) => {
    localStorage.setItem(AUTH_KEY, JSON.stringify(user))
    set({ user })
  },
  logout: () => {
    localStorage.removeItem(AUTH_KEY)
    set({ user: null })
  },
}))
