import { defineStore } from 'pinia'

export const useStatusStore = defineStore('status-store', {
    id: 'status',
  state: () => ({
    statuses: [{
      id: 1,
      title: 'In afwachting',
    },
    {
      id: 2,
      title: 'In behandeling',
    },
    {
      id: 3,
      title: 'Afgehandeld',
    }
    ]
  }),
  getters: {
    getStatusById:state => statusId => state.statuses.find( status => status.id === statusId),
  },
  actions: {},
  

})