import {defineField, defineType} from 'sanity'

export const awardEventType = defineType({
  name: 'awardEvent',
  title: 'Award Event',
  type: 'document',
  fields: [
    defineField({
      name: 'eventYear',
      title: 'Event Year',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'eventTitle',
      title: 'Event Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'eventSubtitle',
      title: 'Event Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'eventDate',
      title: 'Event Date',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'eventLocation',
      title: 'Event Location',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'eventVenue',
      title: 'Event Venue',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'nominationDeadline',
      title: 'Nomination Deadline',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'awardAnnouncementDate',
      title: 'Award Announcement Date',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active Event',
      type: 'boolean',
      description: 'Mark as active to show this event on the website',
      initialValue: true,
    }),
    defineField({
      name: 'status',
      title: 'Event Status',
      type: 'string',
      options: {
        list: [
          {title: 'Nominations Open', value: 'nominations_open'},
          {title: 'Nominations Closed', value: 'nominations_closed'},
          {title: 'Awards Announced', value: 'awards_announced'},
          {title: 'Event Completed', value: 'event_completed'},
          {title: 'Planning', value: 'planning'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'yearsStrong',
      title: 'Years Strong',
      type: 'number',
      description: 'Number of years SEED has been running',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'primaryColor',
      title: 'Primary Color',
      type: 'string',
      description: 'Primary color for the event (hex code)',
      initialValue: '#6366f1',
    }),
    defineField({
      name: 'secondaryColor',
      title: 'Secondary Color',
      type: 'string',
      description: 'Secondary color for the event (hex code)',
      initialValue: '#818cf8',
    }),
    defineField({
      name: 'accentColor',
      title: 'Accent Color',
      type: 'string',
      description: 'Accent color for the event (hex code)',
      initialValue: '#4f46e5',
    }),
    defineField({
      name: 'registerEnabled',
      title: 'Registration Enabled',
      type: 'boolean',
      description: 'Enable registration for this event',
      initialValue: false,
    }),
    defineField({
      name: 'registrationUrl',
      title: 'Registration URL',
      type: 'url',
      hidden: ({parent}) => !parent?.registerEnabled,
    }),
    defineField({
      name: 'description',
      title: 'Event Description',
      type: 'text',
    }),
    defineField({
      name: 'featuredHonorees',
      title: 'Featured Honorees',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'honor'}],
        },
      ],
      description: 'Select honorees to feature prominently on the banner',
    }),
  ],
  preview: {
    select: {
      title: 'eventTitle',
      year: 'eventYear',
      status: 'status',
      date: 'eventDate',
    },
    prepare(selection) {
      const {title, year, status, date} = selection
      return {
        title: `${title} (${year})`,
        subtitle: `${status} - ${date ? new Date(date).toLocaleDateString() : 'No date'}`,
      }
    },
  },
})
