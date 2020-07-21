export default {
  colors: {
    red: '#900',
    primary: '#E7EFDF',
    selectedText: '#7DA752',
    textPrimary: '#7DA751',
    secondary: '#798282',
    text: '#C2C2B5',
    background: '#F3EFEA',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  variants: {
    selection: {
      bg: 'white',
      borderRadius: 9999,
      p: 2,
    },
    card: {
      fontFamily: 'body',
      borderRadius: 15,
      backgroundColor: 'white',
      p: 2,
      width: '100%',
      cursor: 'pointer',
    },
    image: {
      height: 100,
      width: 100,
      minWidth: 100,
      borderRadius: 10,
    },
    cardContent: {
      py: 1,
      px: 3,
    },
    badge: {
      fontFamily: 'body',
      display: 'inline-block',
      color: 'text',
      borderRadius: 9999,
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 2,
      cursor: 'pointer',
      p: 3,
    },
  },
};
