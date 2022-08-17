import slugify from '../utils/slugify'

export default {
  title: "Projects",
  name: 'projects',
  type: "document",
  fields: [
    {
      title: "Title",
      description: "The name of this project, eg: 'Malibu House'",
      name: "title",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "Location",
      description: "The location of this project",
      name: "location",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "Year",
      description: "The year of this project",
      name: "year",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "Status",
      description: "The status of this project, eg: 'In Progress', 'Complete' etc...",
      name: "status",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "Project Code",
      description: "The code for this project, eg: 'S.1071'",
      name: "projectCode",
      type: "string",
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
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'This is required for page routing and can be auto-generated by pressing "generate"',
      options: {
        source: (doc) => {
          let titleSlug = ''
          let campaignSlug = ''
          if (doc.title) {
            titleSlug = `${doc.title}`
          } else {
            titleSlug = ''
          }

          if (doc.campaignTitle) {
            campaignSlug = `-${doc.campaignTitle}`
          } else {
            campaignSlug = ''
          }

          return `${titleSlug}${campaignSlug}`;
        },
        maxLength: 96,
        slugify: (input) => slugify(`${input}`)
      },
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'title',
      location: 'location',
      images: 'images',
      projectCode: 'projectCode',
    },
    prepare(selection) {
      const {title, location, images, projectCode} = selection
      return {
        title: title,
        subtitle: `${projectCode} — ${location}`,
        media: images[0]
      }
    }
  }
}