import {defineType, defineField} from 'sanity'

export const mediaItemSchema = defineType({
  name: 'mediaContent',
  title: 'Media Content',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fullContent',
      title: 'Full Content',
      type: 'text',
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Technology', value: 'Technology'},
          {title: 'Science', value: 'Science'},
          {title: 'Healthcare', value: 'Healthcare'},
          {title: 'Environment', value: 'Environment'},
          {title: 'Space', value: 'Space'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
