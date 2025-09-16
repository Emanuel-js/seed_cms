import {definePlugin} from 'sanity'

export const passwordHashPlugin = definePlugin({
  name: 'password-hash',
  document: {
    // This runs before any document is created or updated
    onBeforeCreate: async (args) => {
      const {document} = args
      // Only process adminUser documents
      if (document._type === 'adminUser' && document.password) {
        // Check if password is already hashed (starts with our salt hash)
        if (!document.password.startsWith('U2VlZA==')) {
          const salt = 'SEED_ADMIN_SALT_2024'
          const hashedPassword = Buffer.from(document.password + salt).toString('base64')
          document.password = hashedPassword
          console.log('Password hashed automatically')
        }
      }

      return args
    },

    onBeforeUpdate: async (args) => {
      const {document} = args

      // Only process adminUser documents
      if (document._type === 'adminUser' && document.password) {
        // Check if password is already hashed (starts with our salt hash)
        if (!document.password.startsWith('U2VlZA==')) {
          const salt = 'SEED_ADMIN_SALT_2024'
          const hashedPassword = Buffer.from(document.password + salt).toString('base64')
          document.password = hashedPassword
          console.log('Password hashed automatically')
        }
      }

      return args
    },
  },
})
