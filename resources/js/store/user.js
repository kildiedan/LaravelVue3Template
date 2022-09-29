import { defineStore } from 'pinia'

import { useAuthStore } from './auth.js';

const baseUrl = `${import.meta.env.VITE_API_URL}/users`;

export const useUserStore = defineStore('user-store', {
    id: 'user',
  state: () => ({
    users: [{
      id: 1,
      firstName: 'admin',
      lastName: 'admin',
      email: "admin",
      password: "testen",
      admin: true,
      telephonenumber: null,
    },
    {
      id: 2,
      firstName: 'user1',
      lastName: 'user1',
      email: 'user1',
      password: "testen",
      admin: false,
      telephonenumber: null,
    },
    ]
  }),
  getters: {
    getUserById:state => userId => state.users.find( user => user.id === userId),
  },
  actions: {
    getUserName(id) {
      return this.getUserById(id).firstName + " " + this.getUserById(id).lastName
    }
  },
})