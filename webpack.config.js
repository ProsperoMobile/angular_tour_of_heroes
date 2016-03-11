module.exports = {
    entry:  './app/main.ts',
    output: {
        path: __dirname,
        filename: 'bundle.js',
    },

    // Currently we need to add '.ts' to resolve.extensions array.
	resolve: {
	    extensions: ['', '.ts', '.webpack.js', '.web.js', '.js']
	},

	// Source maps support (or 'inline-source-map' also works)
	devtool: 'source-map',

	// Add loader for .ts files.
	module: {
	    loaders: [
		    {
		        test: /\.ts$/,
		        loader: 'awesome-typescript-loader'
		    },
		    {
			    test: /\.css$/,
			    loader: 'style!css!sass',
			    // Or
			    loaders: ['style', 'css', 'sass'],
			},
			{
			    test: /\.html$/,
			    loader: 'html',
			}
	    ]
	}
};