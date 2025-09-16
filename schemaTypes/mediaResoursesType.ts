import {defineType, defineField} from 'sanity'

export const resourceSchema = defineType({
  name: 'resource',
  title: 'Resource',
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
      name: 'link',
      title: 'Resource Link',
      type: 'url',
      validation: (Rule) => Rule.required().uri({allowRelative: false}),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'dateAdded',
      title: 'Date Added',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
