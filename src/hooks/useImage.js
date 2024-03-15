const images = import.meta.glob('/src/assets/images/*.{png,jpg,jpeg,PNG,JPEG,gif,GIF}', { eager: true, as: 'url' });

export default images;