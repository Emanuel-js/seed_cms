import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'memberships',
  title: 'Memberships',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title/Position',
      type: 'string',
      description: 'Optional title or position (e.g., "Founder & President", "Board Member")',
    }),
    defineField({
      name: 'membershipType',
      title: 'Membership Type',
      type: 'string',
      options: {
        list: [
          {title: 'Board Member', value: 'board'},
          {title: 'Founding Member', value: 'founding'},
          {title: 'Board & Founding Member', value: 'both'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'text',
      description: 'Brief biography or description of the member',
    }),
    defineField({
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Optional profile image',
    }),
    defineField({
      name: 'url',
      title: 'Personal Website',
      type: 'url',
      description: 'Optional personal website URL',
    }),
    defineField({
      name: 'socialMedia',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        defineField({
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'url',
        }),
        defineField({
          name: 'twitter',
          title: 'Twitter/X',
          type: 'url',
        }),
        defineField({
          name: 'facebook',
          title: 'Facebook',
          type: 'url',
        }),
        defineField({
          name: 'instagram',
          title: 'Instagram',
          type: 'url',
        }),
        defineField({
          name: 'website',
          title: 'Personal Website (Social Media)',
          type: 'url',
          description: 'Additional website link for social media section',
        }),
      ],
    }),
    defineField({
      name: 'vision',
      title: 'Vision Statement',
      type: 'text',
      description: 'Optional vision statement or personal mission',
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Whether this member is currently active',
      initialValue: true,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this member should be displayed (lower numbers appear first)',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
      media: 'image',
      type: 'membershipType',
    },
    prepare(selection) {
      const {title, subtitle, media, type} = selection
      const typeLabels = {
        board: 'Board Member',
        founding: 'Founding Member',
        both: 'Board & Founding Member',
      }
      return {
        title: title,
        subtitle: subtitle
          ? `${subtitle} • ${typeLabels[type as keyof typeof typeLabels] || type}`
          : typeLabels[type as keyof typeof typeLabels] || type,
        media: media,
      }
    },
  },
})
