import { defineStore } from 'pinia'
import apolloClient from '@/plugins/apollo'
import gql from 'graphql-tag'

export const useNodeStore = defineStore('node', {
  state: () => ({
    node: JSON.parse(localStorage.getItem('node')),
  }),

  actions: {
    fetchNode() {
      apolloClient
        .query({
          query: gql`
            query {
              me {
                id
                name
                email
                created_at
                updated_at
              }
            }
          `,
        })
        .then(({ data }) => {
          this.node = data.node
          localStorage.setItem('node', JSON.stringify(this.node))
        })
    },
  },

  getters: {},
})
