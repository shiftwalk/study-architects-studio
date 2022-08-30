export default {
  title: 'Child Project',
  name: 'childProject',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Images',
      name: 'images',
      description: 'The array of images for this project',
      type: 'array',
      of: [
        {
          name: 'image',
          type: 'defaultImage',
          title: 'Image',
        },
      ],
      options: {
        layout: 'grid',
      }
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'images.0',
    },
    prepare: (selection) => {

      return {
        title: selection.title,
        media: selection.media
      }
    }
  }
}