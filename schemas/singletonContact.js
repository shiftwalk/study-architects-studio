export default {
  title: 'Contact',
  name: 'contact',
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
      title: 'Email Address',
      name: 'emailAddress',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Instagram',
      name: 'instagram',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Address Line 1',
      name: 'address',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Address Line 2',
      name: 'addressLine2',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Address Line 3',
      name: 'addressLine3',
      type: 'string',
      validation: Rule => Rule.required()
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