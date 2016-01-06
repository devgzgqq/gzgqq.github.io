fis.match('less/doc.less', {
    rExt: '.css', // from .less to .css
    parser: fis.plugin('less-2.x', {
        // fis-parser-less-2.x option
    }),
    release: 'assets/css/OurFrame.css'
});