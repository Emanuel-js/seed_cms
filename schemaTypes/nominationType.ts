import {defineType, defineField} from 'sanity'

export const nominationType = defineType({
  name: 'nomination',
  title: 'Nomination',
  type: 'document',
  fields: [
    defineField({
      name: 'nominationId',
      title: 'Nomination ID',
      type: 'string',
      readOnly: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Adult Award', value: 'adult'},
          {title: 'Student Award', value: 'student'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'studentType',
      title: 'Student Type',
      type: 'string',
      options: {
        list: [
          {title: 'High School', value: 'highSchool'},
          {title: 'College', value: 'college'},
        ],
      },
      hidden: ({document}) => document?.category !== 'student',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Submitted', value: 'submitted'},
          {title: 'Under Review', value: 'under_review'},
          {title: 'Shortlisted', value: 'shortlisted'},
          {title: 'Selected', value: 'selected'},
          {title: 'Rejected', value: 'rejected'},
        ],
      },
      initialValue: 'submitted',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'submissionDate',
      title: 'Submission Date',
      type: 'datetime',
      readOnly: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'awardYear',
      title: 'Award Year',
      type: 'number',
      readOnly: true,
      validation: (Rule) => Rule.required(),
    }),

    // Nominee Information
    defineField({
      name: 'nomineeInfo',
      title: 'Nominee Information',
      type: 'object',
      fields: [
        defineField({
          name: 'firstName',
          title: 'First Name',
          type: 'string',
        }),
        defineField({
          name: 'lastName',
          title: 'Last Name',
          type: 'string',
        }),
        defineField({
          name: 'email',
          title: 'Email',
          type: 'string',
        }),
        defineField({
          name: 'phone',
          title: 'Phone',
          type: 'string',
        }),
        defineField({
          name: 'dateOfBirth',
          title: 'Date of Birth',
          type: 'date',
        }),
        defineField({
          name: 'address',
          title: 'Address',
          type: 'object',
          fields: [
            {name: 'street', title: 'Street', type: 'string'},
            {name: 'city', title: 'City', type: 'string'},
            {name: 'state', title: 'State', type: 'string'},
            {name: 'zipCode', title: 'ZIP Code', type: 'string'},
            {name: 'country', title: 'Country', type: 'string'},
          ],
        }),
        defineField({
          name: 'photo',
          title: 'Photo',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
      ],
    }),

    // Nominator Information
    defineField({
      name: 'nominatorInfo',
      title: 'Nominator Information',
      type: 'object',
      fields: [
        defineField({
          name: 'firstName',
          title: 'First Name',
          type: 'string',
        }),
        defineField({
          name: 'lastName',
          title: 'Last Name',
          type: 'string',
        }),
        defineField({
          name: 'email',
          title: 'Email',
          type: 'string',
        }),
        defineField({
          name: 'phone',
          title: 'Phone',
          type: 'string',
        }),
        defineField({
          name: 'relationship',
          title: 'Relationship to Nominee',
          type: 'string',
        }),
        defineField({
          name: 'organization',
          title: 'Organization',
          type: 'string',
        }),
      ],
    }),

    // Academic Information (for students)
    defineField({
      name: 'academicInfo',
      title: 'Academic Information',
      type: 'object',
      hidden: ({document}) => document?.category !== 'student',
      fields: [
        defineField({
          name: 'schoolName',
          title: 'School/University Name',
          type: 'string',
        }),
        defineField({
          name: 'gradeLevel',
          title: 'Grade Level',
          type: 'string',
        }),
        defineField({
          name: 'gpa',
          title: 'GPA',
          type: 'number',
        }),
        defineField({
          name: 'satScore',
          title: 'SAT Score',
          type: 'number',
        }),
        defineField({
          name: 'actScore',
          title: 'ACT Score',
          type: 'number',
        }),
        defineField({
          name: 'graduationDate',
          title: 'Expected Graduation Date',
          type: 'date',
        }),
        defineField({
          name: 'honors',
          title: 'Honors and Awards',
          type: 'array',
          of: [{type: 'string'}],
          options: {
            sortable: true,
          },
        }),
        defineField({
          name: 'extracurricularActivities',
          title: 'Extracurricular Activities',
          type: 'array',
          of: [{type: 'string'}],
          options: {
            sortable: true,
          },
        }),
      ],
    }),

    // Professional Information (for adults)
    defineField({
      name: 'professionalInfo',
      title: 'Professional Information',
      type: 'object',
      hidden: ({document}) => document?.category !== 'adult',
      fields: [
        defineField({
          name: 'currentPosition',
          title: 'Current Position',
          type: 'string',
        }),
        defineField({
          name: 'organization',
          title: 'Organization',
          type: 'string',
        }),
        defineField({
          name: 'yearsOfExperience',
          title: 'Years of Experience',
          type: 'string',
        }),
        defineField({
          name: 'education',
          title: 'Education',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'degree', title: 'Degree', type: 'string'},
                {name: 'institution', title: 'Institution', type: 'string'},
                {name: 'year', title: 'Year', type: 'number'},
              ],
              initialValue: () => ({
                _key: Math.random().toString(36).substr(2, 9)
              })
            },
          ],
          options: {
            sortable: true,
          },
        }),
        defineField({
          name: 'certifications',
          title: 'Certifications',
          type: 'array',
          of: [{type: 'string'}],
          options: {
            sortable: true,
          },
        }),
      ],
    }),

    // Achievement Information
    defineField({
      name: 'achievements',
      title: 'Achievements and Accomplishments',
      type: 'object',
      fields: [
        defineField({
          name: 'summary',
          title: 'Achievement Summary',
          type: 'text',
        }),
        defineField({
          name: 'detailedDescription',
          title: 'Detailed Description',
          type: 'text',
        }),
        defineField({
          name: 'impact',
          title: 'Impact on Community',
          type: 'text',
        }),
        defineField({
          name: 'challenges',
          title: 'Challenges Overcome',
          type: 'text',
        }),
        defineField({
          name: 'futureGoals',
          title: 'Future Goals',
          type: 'text',
        }),
        defineField({
          name: 'achievementCategories',
          title: 'Achievement Categories',
          type: 'array',
          of: [{type: 'string'}],
          options: {
            list: [
              'Community Service',
              'Academic Excellence',
              'Leadership',
              'Innovation',
              'Cultural Preservation',
              'Humanitarian Work',
              'Professional Achievement',
              'Youth Development',
              'Education',
              'Healthcare',
              'Technology',
              'Arts and Culture',
              'Sports',
              'Environmental Conservation',
            ],
            sortable: true,
          },
        }),
      ],
    }),

    // Supporting Documents
    defineField({
      name: 'supportingDocuments',
      title: 'Supporting Documents',
      type: 'object',
      fields: [
        defineField({
          name: 'resume',
          title: 'Resume/CV',
          type: 'file',
        }),
        defineField({
          name: 'transcript',
          title: 'Academic Transcript',
          type: 'file',
          hidden: ({document}) => document?.category !== 'student',
        }),
        defineField({
          name: 'lettersOfRecommendation',
          title: 'Letters of Recommendation',
          type: 'array',
          of: [{
            type: 'file',
            initialValue: () => ({
              _key: Math.random().toString(36).substr(2, 9)
            })
          }],
          options: {
            sortable: true,
          },
        }),
        defineField({
          name: 'additionalDocuments',
          title: 'Additional Supporting Documents',
          type: 'array',
          of: [{
            type: 'file',
            initialValue: () => ({
              _key: Math.random().toString(36).substr(2, 9)
            })
          }],
          options: {
            sortable: true,
          },
        }),
        defineField({
          name: 'portfolio',
          title: 'Portfolio/Work Samples',
          type: 'array',
          of: [{
            type: 'file',
            initialValue: () => ({
              _key: Math.random().toString(36).substr(2, 9)
            })
          }],
          options: {
            sortable: true,
          },
        }),
      ],
    }),

    // Review Information
    defineField({
      name: 'reviewInfo',
      title: 'Review Information',
      type: 'object',
      fields: [
        defineField({
          name: 'reviewerNotes',
          title: 'Reviewer Notes',
          type: 'text',
        }),
        defineField({
          name: 'finalDecision',
          title: 'Final Decision',
          type: 'string',
          options: {
            list: [
              {title: 'Pending', value: 'pending'},
              {title: 'Approved', value: 'approved'},
              {title: 'Rejected', value: 'rejected'},
              {title: 'Shortlisted', value: 'shortlisted'},
            ],
          },
        }),
        defineField({
          name: 'decisionDate',
          title: 'Decision Date',
          type: 'datetime',
        }),
        defineField({
          name: 'decisionReason',
          title: 'Decision Reason',
          type: 'text',
        }),
      ],
    }),

    // Metadata
    defineField({
      name: 'metadata',
      title: 'Metadata',
      type: 'object',
      fields: [
        defineField({
          name: 'ipAddress',
          title: 'IP Address',
          type: 'string',
        }),
        defineField({
          name: 'userAgent',
          title: 'User Agent',
          type: 'string',
        }),
        defineField({
          name: 'submissionSource',
          title: 'Submission Source',
          type: 'string',
          options: {
            list: [
              {title: 'Website', value: 'website'},
              {title: 'Mobile App', value: 'mobile_app'},
              {title: 'Admin Panel', value: 'admin_panel'},
            ],
          },
        }),
        defineField({
          name: 'tags',
          title: 'Tags',
          type: 'array',
          of: [{type: 'string'}],
          options: {
            sortable: true,
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'nomineeInfo.firstName',
      subtitle: 'nomineeInfo.lastName',
      category: 'category',
      status: 'status',
      year: 'awardYear',
    },
    prepare(selection) {
      const {title, subtitle, category, status, year} = selection
      return {
        title: `${title} ${subtitle}`,
        subtitle: `${category} - ${status} (${year})`,
      }
    },
  },
})
