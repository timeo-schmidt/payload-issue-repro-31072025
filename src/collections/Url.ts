import { CollectionConfig } from 'payload'

const Url: CollectionConfig = {
  slug: 'url',
  admin: {
    useAsTitle: 'path',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'path',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'linkedPage',
      type: 'relationship',
      relationTo: ['page-a', 'page-b'],
      required: true,
      hasMany: false,
    },
  ],
}

export default Url
