import { defineType, defineField } from 'sanity'

export const contactType = defineType({
  name: 'contact',
  title: 'Contact Form Submission',
  type: 'document',
  icon: () => '📧',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(100),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
      validation: (Rule) => Rule.max(20),
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (Rule) => Rule.max(100),
    }),
    defineField({
      name: 'subject',
      title: 'Subject/Query Type',
      type: 'string',
      options: {
        list: [
          { title: 'General Inquiry', value: 'general' },
          { title: 'Technical Support', value: 'support' },
          { title: 'Request a Quote', value: 'quote' },
          { title: 'Feedback', value: 'feedback' },
          { title: 'Partnership Opportunity', value: 'partnership' },
          { title: 'Other', value: 'other' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
      validation: (Rule) => Rule.required().min(10).max(1000),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'In Progress', value: 'in_progress' },
          { title: 'Responded', value: 'responded' },
          { title: 'Resolved', value: 'resolved' },
          { title: 'Closed', value: 'closed' },
        ],
        layout: 'radio',
      },
      initialValue: 'new',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'priority',
      title: 'Priority',
      type: 'string',
      options: {
        list: [
          { title: 'Low', value: 'low' },
          { title: 'Medium', value: 'medium' },
          { title: 'High', value: 'high' },
          { title: 'Urgent', value: 'urgent' },
        ],
        layout: 'radio',
      },
      initialValue: 'medium',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'assignedTo',
      title: 'Assigned To',
      type: 'string',
      description: 'Admin user assigned to handle this contact',
    }),
    defineField({
      name: 'response',
      title: 'Response',
      type: 'text',
      description: 'Admin response to the contact',
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'lastUpdated',
      title: 'Last Updated',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'ipAddress',
      title: 'IP Address',
      type: 'string',
      description: 'IP address of the submitter (for security purposes)',
    }),
    defineField({
      name: 'userAgent',
      title: 'User Agent',
      type: 'string',
      description: 'Browser information of the submitter',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'email',
      status: 'status',
      subject: 'subject',
      submittedAt: 'submittedAt',
    },
    prepare(selection) {
      const { title, subtitle, status, subject, submittedAt } = selection
      const date = new Date(submittedAt).toLocaleDateString()
      const statusEmoji = {
        new: '🆕',
        in_progress: '🔄',
        responded: '✅',
        resolved: '✅',
        closed: '🔒',
      }[status] || '❓'
      
      return {
        title: `${statusEmoji} ${title}`,
        subtitle: `${subtitle} • ${subject} • ${date}`,
        media: () => '📧',
      }
    },
  },
  orderings: [
    {
      title: 'Newest First',
      name: 'newestFirst',
      by: [{ field: 'submittedAt', direction: 'desc' }],
    },
    {
      title: 'Oldest First',
      name: 'oldestFirst',
      by: [{ field: 'submittedAt', direction: 'asc' }],
    },
    {
      title: 'Status',
      name: 'byStatus',
      by: [{ field: 'status', direction: 'asc' }],
    },
    {
      title: 'Priority',
      name: 'byPriority',
      by: [{ field: 'priority', direction: 'desc' }],
    },
  ],
})
