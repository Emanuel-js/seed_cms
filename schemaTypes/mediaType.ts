import { defineField, defineType } from 'sanity'

export const mediaItemSchema = defineType({
  name: 'mediaContent',
  title: 'Media Content',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',

    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',

    }),
    defineField({
      name: 'fullContent',
      title: 'Full Content',
      type: 'text',

    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Image', value: 'image'},
          {title: 'Video', value: 'video'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',

    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',

    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Annual Dinner', value: 'Annual Dinner'},
          {title: 'Award Ceremony', value: 'Award Ceremony'},
          {title: 'Recognition Event', value: 'Recognition Event'},
          {title: 'Scholarship Awards', value: 'Scholarship Awards'},
          {title: 'Honoree Celebration', value: 'Honoree Celebration'},
          {title: 'Student Awards', value: 'Student Awards'},
          {title: 'Adult Awards', value: 'Adult Awards'},
          {title: 'Academic Excellence', value: 'Academic Excellence'},
          {title: 'Community Service', value: 'Community Service'},
          {title: 'Leadership Recognition', value: 'Leadership Recognition'},
          {title: 'Outstanding Achievement', value: 'Outstanding Achievement'},
          {title: 'Lifetime Achievement', value: 'Lifetime Achievement'},
          {title: 'Innovation Awards', value: 'Innovation Awards'},
          {title: 'Cultural Excellence', value: 'Cultural Excellence'},
          {title: 'Professional Achievement', value: 'Professional Achievement'},
          {title: 'Educational Programs', value: 'Educational Programs'},
          {title: 'Cultural Events', value: 'Cultural Events'},
          {title: 'Fundraising Events', value: 'Fundraising Events'},
          {title: 'Board Meetings', value: 'Board Meetings'},
          {title: 'Volunteer Activities', value: 'Volunteer Activities'},
          {title: 'Partnership Events', value: 'Partnership Events'},
          {title: 'Media Coverage', value: 'Media Coverage'},
          {title: 'Behind the Scenes', value: 'Behind the Scenes'},
          {title: 'Success Stories', value: 'Success Stories'},
          {title: 'Testimonials', value: 'Testimonials'},
          {title: 'Historical Moments', value: 'Historical Moments'},
          {title: 'Special Occasions', value: 'Special Occasions'},
          {title: 'Other', value: 'Other'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Mark this item as featured to display it prominently',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order for featured items (lower numbers appear first)',
      initialValue: 0,
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Tags for better organization and search',
    }),
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      description: 'Alternative text for accessibility',
    }),
  ],
})
