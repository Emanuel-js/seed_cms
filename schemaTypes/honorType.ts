import {defineField, defineType} from 'sanity'

export const honorType = defineType({
  name: 'honor',
  title: 'Honor',
  type: 'document',
  fields: [
    defineField({
      name: 'year',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'recipientName',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'recipientPhoto',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'recipientPhotUrl',
      type: 'url',
    }),
    defineField({
      name: 'type',
      type: 'string',
      options: {
        list: ['research', 'leadership', 'innovation', 'accAcademic', 'service', 'others'],
      },
    }),
    defineField({
      name: 'recipientType',
      type: 'string',
      options: {
        list: ['adult', 'student'],
      },
    }),

    defineField({
      name: 'highlights',
      type: 'array',
      of: [{type: 'string'}],
    }),

    defineField({
      name: 'featured',
      type: 'boolean',
    }),
    defineField({
      name: 'tags',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'media',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'type',
              type: 'string',
              options: {list: ['image', 'video', 'youtube']},
            }),
            defineField({
              name: 'image',
              type: 'image',
              hidden: ({parent}) => parent.type !== 'image',
              validation: (Rule) =>
                Rule.custom((image, context) => {
                  const type = (context.parent as {type: string}).type
                  if (type === 'image' && (!image || !image.asset?._ref)) {
                    return 'Image is required when type is image'
                  }
                  return true
                }),
            }),
            defineField({
              name: 'url',
              type: 'string',
              hidden: ({parent}) => parent.type === 'image',
              validation: (Rule) =>
                Rule.custom((url, context) => {
                  const type = (context.parent as {type: string}).type
                  if (type !== 'image' && (!url || url.trim() === '')) {
                    return 'URL is required when type is video or youtube'
                  }
                  return true
                }),
            }),
          ],
          validation: (Rule) =>
            Rule.custom((mediaItem) => {
              const item = mediaItem as {type: string; image?: any; url?: string}
              if (item.type === 'image' && (!item.image || !item.image.asset?._ref)) {
                return 'Image is required when type is image'
              }
              if (item.type !== 'image' && (!item.url || item.url.trim() === '')) {
                return 'URL is required when type is video or youtube'
              }
              return true
            }),
        },
      ],
    }),
    defineField({
      name: 'lifeStory',
      type: 'object',
      fields: [
        defineField({name: 'childhood', type: 'text'}),
        defineField({name: 'education', type: 'text'}),
        defineField({name: 'career', type: 'text'}),
        defineField({name: 'achievements', type: 'text'}),
        defineField({name: 'impact', type: 'text'}),
        defineField({
          name: 'quotes',
          type: 'array',
          of: [{type: 'string'}],
        }),
      ],
    }),
    defineField({
      name: 'socialLinks',
      type: 'object',
      fields: [
        defineField({name: 'linkedin', type: 'url'}),
        defineField({name: 'twitter', type: 'url'}),
        defineField({name: 'website', type: 'url'}),
      ],
    }),
  ],
})
