import { defineField, defineType } from 'sanity'

export const deadlineConfigType = defineType({
  name: 'deadlineConfig',
  title: 'Deadline Configuration',
  type: 'document',
  fields: [
    defineField({
      name: 'configName',
      title: 'Configuration Name',
      type: 'string',
      description: 'Name for this deadline configuration (e.g., "2025 Awards Season")',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active Configuration',
      type: 'boolean',
      description: 'Mark as active to use this configuration on the website',
      initialValue: true,
    }),
    defineField({
      name: 'adultNominationDeadline',
      title: 'Adult Nomination Deadline',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'studentNominationDeadline',
      title: 'Student Nomination Deadline',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'adultDeadlineMessage',
      title: 'Adult Deadline Message',
      type: 'text',
      description: 'Message to show when adult nominations are closed',
      initialValue: 'Adult nominations are now closed. Thank you for your submissions!',
    }),
    defineField({
      name: 'studentDeadlineMessage',
      title: 'Student Deadline Message',
      type: 'text',
      description: 'Message to show when student nominations are closed',
      initialValue: 'Student nominations are now closed. Thank you for your submissions!',
    }),
    defineField({
      name: 'showDeadlineTags',
      title: 'Show Deadline Tags',
      type: 'boolean',
      description: 'Whether to show deadline countdown tags on banners',
      initialValue: true,
    }),
    defineField({
      name: 'showRegistrationButtons',
      title: 'Show Registration Buttons',
      type: 'boolean',
      description: 'Whether to show registration buttons (hide when nominations are closed)',
      initialValue: true,
    }),
    defineField({
      name: 'bannerPhase',
      title: 'Banner Phase',
      type: 'string',
      options: {
        list: [
          {title: 'Registration Phase', value: 'registration'},
          {title: 'Post-Announcement Phase', value: 'post_announcement'},
        ],
      },
      description: 'Current phase determines which banner content to show',
      validation: (rule) => rule.required(),
      initialValue: 'registration',
    }),
    defineField({
      name: 'announcementDate',
      title: 'Announcement Date',
      type: 'datetime',
      description: 'Date when honorees will be announced (switches to post-announcement phase)',
    }),
  ],
  preview: {
    select: {
      title: 'configName',
      active: 'isActive',
      phase: 'bannerPhase',
      adultDeadline: 'adultNominationDeadline',
      studentDeadline: 'studentNominationDeadline',
    },
    prepare(selection) {
      const {title, active, phase, adultDeadline, studentDeadline} = selection
      const status = active ? 'Active' : 'Inactive'
      const adultDate = adultDeadline ? new Date(adultDeadline).toLocaleDateString() : 'No date'
      const studentDate = studentDeadline ? new Date(studentDeadline).toLocaleDateString() : 'No date'

      return {
        title: `${title} (${status})`,
        subtitle: `${phase} - Adult: ${adultDate}, Student: ${studentDate}`,
      }
    },
  },
})
