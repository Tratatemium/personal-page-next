import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'href',
              title: 'URL',
              type: 'url',
              validation: (rule) => rule.required(),
            },
            {
              name: 'text',
              title: 'Text',
              type: 'string',
              validation: (rule) => rule.required(),
            },
            {
              name: 'svgType',
              title: 'Icon Type',
              type: 'string',
              options: {
                list: [
                  {title: 'GitHub', value: 'github'},
                  {title: 'Globe', value: 'globe'},
                ],
                layout: 'radio',
              },
              validation: (rule) => rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'text',
              subtitle: 'href',
              svgType: 'svgType',
            },
            prepare({title, subtitle, svgType}) {
              return {
                title,
                subtitle,
                media: svgType === 'github' ? '🐙' : '🌐',
              }
            },
          },
        },
      ],
    }),
  ],
})
