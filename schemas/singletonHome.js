export default {
  title: 'Home',
  name: 'home',
  type: 'document',
  __experimental_actions: ['update', 'create', 'delete', 'publish'],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Hero Image',
      name: 'heroImage',
      description: 'The array of images for the hero section, one will be picked at random each refresh',
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
      },
      validation: Rule => Rule.required()
    },
    {
      title: 'Hero Text',
      name: 'heroText',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Content Heading',
      name: 'contentHeading',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    },
    {
      title: 'Image Grid',
      name: 'imageGrid',
      description: 'The array of images that can be moved around on the home page (4 required)',
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
      },
      validation: Rule => Rule.required().min(4).max(4)
    },
    {
      title: 'Content Text',
      name: 'contentText',
      type: 'array', 
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo'
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare ({ title }) {
      return {
        title
      }
    }
  }
}