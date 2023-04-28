export default {
  name: 'cart',
  title: 'Cart',
  type: 'document',
  fields: [
    {
      name: 'owner',
      title: 'Owner',
      type: 'reference',
      to: [{type: 'users'}],
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'variants' }],
        },
      ],
    },
  ],
}
