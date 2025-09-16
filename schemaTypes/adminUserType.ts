export default {
  name: 'adminUser',
  title: 'Admin User',
  type: 'document',
  fields: [
    {
      name: 'clerkId',
      title: 'Clerk User ID',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      description: 'Unique Clerk user ID for authentication',
    },
    {
      name: 'username',
      title: 'Username',
      type: 'string',
      validation: (Rule: any) => Rule.required().min(3).max(50),
      description: 'Unique username for display',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'email',
      validation: (Rule: any) => Rule.required().email(),
      description: 'Admin user email address',
    },
    {
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      description: 'Admin user first name',
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      description: 'Admin user last name',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      options: {
        list: [
          {title: 'Super Admin', value: 'super_admin'},
          {title: 'Admin', value: 'admin'},
          {title: 'Editor', value: 'editor'},
          {title: 'Viewer', value: 'viewer'},
        ],
      },
      validation: (Rule: any) => Rule.required(),
      description: 'User role and permissions level',
    },
    {
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
      description: 'Whether the user account is active',
    },
    {
      name: 'lastLogin',
      title: 'Last Login',
      type: 'datetime',
      description: 'Timestamp of last successful login',
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      readOnly: true,
      description: 'When the user account was created',
    },
    {
      name: 'updatedAt',
      title: 'Updated At',
      type: 'datetime',
      readOnly: true,
      description: 'When the user account was last updated',
    },
    {
      name: 'permissions',
      title: 'Permissions',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              'manage_users',
              'manage_nominations',
              'manage_honorees',
              'manage_events',
              'manage_media',
              'manage_tributes',
              'view_analytics',
              'export_data',
              'manage_settings',
            ],
          },
        },
      ],
      description: 'Specific permissions for this user',
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Profile picture for the admin user',
    },
    {
      name: 'notes',
      title: 'Notes',
      type: 'text',
      description: 'Additional notes about this user',
    },
  ],
  preview: {
    select: {
      title: 'username',
      subtitle: 'email',
      media: 'profileImage',
    },
  },
  orderings: [
    {
      title: 'Username A-Z',
      name: 'usernameAsc',
      by: [{field: 'username', direction: 'asc'}],
    },
    {
      title: 'Recently Created',
      name: 'createdAtDesc',
      by: [{field: 'createdAt', direction: 'desc'}],
    },
    {
      title: 'Last Login',
      name: 'lastLoginDesc',
      by: [{field: 'lastLogin', direction: 'desc'}],
    },
  ],
  // Document actions to handle timestamps
  document: {
    // This will run before the document is created or updated
    prepare: (doc: any, context: any) => {
      // Set timestamps
      if (context.action === 'create') {
        doc.createdAt = new Date().toISOString()
      }
      doc.updatedAt = new Date().toISOString()

      return doc
    },
  },
}
