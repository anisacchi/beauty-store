export default {
	name: 'products',
	title: 'Products',
	type: 'document',
	fields: [
		{
			name: 'images',
			title: 'Images',
			type: 'array',
			of: [{ type: 'image' }],
			options: {
				hotspot: true
			}
		},
		{
			name: 'name',
			title: 'Name',
			type: 'string'
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'name',
				maxLength: 90
			}
		},
		{
			name: 'brand',
			title: 'Brand',
			type: 'string'
		},
		{
			name: 'price',
			title: 'Price',
			type: 'number'
		},
		{
			name: 'description',
			title: 'Description',
			type: 'string'
		},
		{
			name: 'rating',
			title: 'Rating',
			type: 'number',
			validation: Rule => Rule.min(0).max(5)
		},
		{
			name: 'link',
			title: 'Link',
			type: 'string'
		}
	]
}