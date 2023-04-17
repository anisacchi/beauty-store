export default {
	name: 'variants',
	title: 'Variants',
	type: 'document',
	fields: [
		{
			name: 'image',
			title: 'Image',
			type: 'image',
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
			name: 'product',
			title: 'Product',
			type: 'reference',
			to: [{ type: 'products' }]
		}
	]
}