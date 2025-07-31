import { CollectionConfig } from 'payload'

const PageB: CollectionConfig = {
  slug: 'page-b',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'urls',
      type: 'join',
      collection: 'url',
      on: 'linkedPage',
    },
  ],
}

export default PageB
