import { CollectionConfig } from 'payload'

const PageA: CollectionConfig = {
  slug: 'page-a',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'urls',
      type: 'join',
      collection: 'url',
      on: 'linkedPage',
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'urls2',
              type: 'join',
              collection: 'url',
              on: 'linkedPage',
            },
          ],
        },
      ],
    },
  ],
}

export default PageA
