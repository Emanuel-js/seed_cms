import {defineField, defineType} from 'sanity'

export const achievementType = defineType({
  name: 'achievement',
  title: 'Achievement',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required().min(1).max(100),
    }),
    defineField({
      name: 'value',
      title: 'Value',
      type: 'number',
      validation: (rule) => rule.required().min(0),
      description: 'The numerical value to display (e.g., 150 for "150 Awards")',
    }),
    defineField({
      name: 'suffix',
      title: 'Suffix',
      type: 'string',
      description: 'Text to append after the value (e.g., "Yrs", "+", "%")',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (rule) => rule.required().min(10).max(200),
      description: 'Brief description of what this achievement represents',
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: {
        list: [
          {title: 'Trophy', value: 'Trophy'},
          {title: 'Users', value: 'Users'},
          {title: 'Star', value: 'Star'},
          {title: 'Target', value: 'Target'},
          {title: 'Award', value: 'Award'},
          {title: 'Heart', value: 'Heart'},
          {title: 'Globe', value: 'Globe'},
          {title: 'Book', value: 'Book'},
          {title: 'Graduation Cap', value: 'GraduationCap'},
          {title: 'Lightbulb', value: 'Lightbulb'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'colorScheme',
      title: 'Color Scheme',
      type: 'string',
      options: {
        list: [
          {title: 'Yellow (Trophy)', value: 'from-yellow-600 to-yellow-500'},
          {title: 'Green (Success)', value: 'from-green-600 to-green-500'},
          {title: 'Red (Passion)', value: 'from-red-600 to-red-500'},
          {title: 'Blue (Trust)', value: 'from-blue-600 to-blue-500'},
          {title: 'Purple (Innovation)', value: 'from-purple-600 to-purple-500'},
          {title: 'Indigo (Excellence)', value: 'from-indigo-600 to-indigo-500'},
          {title: 'Pink (Care)', value: 'from-pink-600 to-pink-500'},
          {title: 'Orange (Energy)', value: 'from-orange-600 to-orange-500'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: (rule) => rule.required().min(1).max(10),
      description: 'Order in which this achievement appears (1-10)',
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
      description: 'Whether this achievement should be displayed on the website',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Awards', value: 'awards'},
          {title: 'Recipients', value: 'recipients'},
          {title: 'Experience', value: 'experience'},
          {title: 'Impact', value: 'impact'},
          {title: 'Community', value: 'community'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Tags for filtering and organization',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      value: 'value',
      suffix: 'suffix',
      isActive: 'isActive',
    },
    prepare(selection) {
      const {title, value, suffix, isActive} = selection
      return {
        title: `${title} (${value}${suffix || ''})`,
        subtitle: isActive ? 'Active' : 'Inactive',
      }
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
    {
      title: 'Title A-Z',
      name: 'titleAsc',
      by: [{field: 'title', direction: 'asc'}],
    },
    {
      title: 'Value High-Low',
      name: 'valueDesc',
      by: [{field: 'value', direction: 'desc'}],
    },
  ],
})
