import {defineType, defineField} from 'sanity'

export const tributeSchema = defineType({
  name: 'tribute',
  title: 'Tribute',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'years',
      title: 'Years',
      type: 'string',
      description: 'Lifespan or time period of the individual',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // allows the user to crop the image
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'biography',
      title: 'Biography',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'honorYear',
      title: 'Honor Year',
      type: 'string',
    }),
  ],
})
