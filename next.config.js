const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.cloudinary.com',
      //  hostname: 'dzzov854t.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'dev-to-uploads.s3.amazonaws.com',
        pathname: '**',
      }
    ],
  },
  
}