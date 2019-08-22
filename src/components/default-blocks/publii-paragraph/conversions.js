const availableConversions = [
  {
    'icon': 'headings',
    'name': 'Header',
    'type': 'publii-header',
    'convert': function (config, content, editorInstance) {
      // eslint-disable-next-line
      let newContent = editorInstance.extensions.conversionHelpers.stripTags(content.replace(/<br>/gmi, "\n")).replace(/\n/gmi, '<br>');
      let newConfig = {
        headingLevel: 2,
        textAlign: config.textAlign,
        link: {
          url: '',
          noFollow: false,
          targetBlank: false
        },
        advanced: {
          cssClasses: config.advanced.cssClasses,
          customId: false,
          id: config.advanced.id
        }
      };

      return {
        content: newContent,
        config: newConfig
      };
    }
  },
  {
    'icon': 'quote',
    'name': 'Quote',
    'type': 'publii-quote',
    'convert': function (config, content, editorInstance) {
      let newConfig = {
        advanced: {
          cssClasses: config.advanced.cssClasses,
          id: config.advanced.id
        }
      };

      return {
        content: {
          text: content,
          author: ''
        },
        config: newConfig
      };
    }
  },
  {
    'icon': 'unordered-list',
    'name': 'List',
    'type': 'publii-list',
    'convert': function (config, content, editorInstance) {
      let newContent = '<li>' + content.split('<br>').join('</li><li>') + '</li>';
      let newConfig = {
        listType: 'ul',
        advanced: {
          cssClasses: config.advanced.cssClasses,
          id: config.advanced.id
        }
      };

      return {
        content: newContent,
        config: newConfig
      };
    }
  },
  {
    'icon': 'code',
    'name': 'Code',
    'type': 'publii-code',
    'convert': function (config, content, editorInstance) {
      // eslint-disable-next-line
      let newContent = editorInstance.extensions.conversionHelpers.stripTags(content.replace(/<br>/gmi, "\n"));
      let newConfig = {
        language: 'html',
        advanced: {
          cssClasses: config.advanced.cssClasses,
          id: config.advanced.id
        }
      };

      return {
        content: newContent,
        config: newConfig
      };
    }
  },
  {
    'icon': 'html',
    'name': 'HTML',
    'type': 'publii-html',
    'convert': function (config, content, editorInstance) {
      console.log('C:', content);
      // eslint-disable-next-line
      let newContent = editorInstance.extensions.conversionHelpers.stripTags(content.replace(/<br>/gmi, "\n"));
      console.log('NC:', newContent);
      let newConfig = {
        advanced: {
          cssClasses: config.advanced.cssClasses,
          id: config.advanced.id
        }
      };

      return {
        content: newContent,
        config: newConfig
      };
    }
  }
];

module.exports = availableConversions;
