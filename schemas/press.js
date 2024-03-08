export default {
  title: "Press",
  name: 'press',
  type: "document",
  fields: [
    {
      title: "Title",
      description: "The name of this press release, eg: 'The Future Of Everything'",
      name: "title",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "Publication",
      description: "The place this was published, eg: 'The Wall Street Journal'",
      name: "publication",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "Type",
      description: "The type of article, eg: 'Interview' or 'Recognition'",
      name: "type",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "Link",
      description: "The link to this article",
      name: "link",
      type: "url",
      validation: Rule => Rule.required()
    },
  ],
  preview: {
    select: {
      title: 'title',
      type: 'type',
      publication: 'publication',
    },
    prepare(selection) {
      const {title, type, publication} = selection
      return {
        title: title,
        subtitle: `${publication} — ${type}`,
      }
    }
  }
}