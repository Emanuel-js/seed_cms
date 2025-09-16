import {defineType, defineField} from 'sanity'

export const nomineeSchema = defineType({
  name: 'nominee',
  title: 'Nominee',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role',
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
      name: 'color',
      title: 'Color',
      type: 'string',
      description: 'The background color or gradient used for the nominee card.',
      options: {
        list: [
          {title: 'Red', value: 'red'},
          {title: 'Orange', value: 'orange'},
          {title: 'Yellow', value: 'yellow'},
          {title: 'Green', value: 'green'},
          {title: 'Blue', value: 'blue'},
          {title: 'Indigo', value: 'indigo'},
          {title: 'Violet', value: 'violet'},
          {title: 'Pink', value: 'pink'},
          {title: 'Purple', value: 'purple'},
          {title: 'Teal', value: 'teal'},
          {title: 'Cyan', value: 'cyan'},
          {title: 'Gray', value: 'gray'},
          {title: 'Black', value: 'black'},
          {title: 'White', value: 'white'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Adult', value: 'adult'},
          {title: 'Student', value: 'student'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
