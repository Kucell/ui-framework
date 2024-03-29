module.exports = {
    title: 'Hello VitePress',
    description: 'Just playing around.',
    markdown: {
        // options for markdown-it-anchor
        anchor: { permalink: false },
    
        // options for markdown-it-toc
        toc: { includeLevel: [1, 2] },
    
        config: (md) => {
          // use more markdown-it plugins!
          md.use(require('markdown-it-emoji'))
        }
    }
}