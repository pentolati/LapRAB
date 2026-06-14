import { extendTheme } from '@chakra-ui/react'

// LapRAB — palet ENTENG & airy: sage hijau lembut + aksen soft (emas, biru kabut).
// Terang, ringan, elegan. TANPA ungu, TANPA gradasi, hero TIDAK gelap.
const sage = {
  50: '#f3f7ee', 100: '#e4efd7', 200: '#cbe0b4', 300: '#aacb88', 400: '#8cb767',
  500: '#6f9a4c', 600: '#577d3a', 700: '#45632f', 800: '#394f29', 900: '#2e3f22',
}

const theme = extendTheme({
  fonts: {
    heading: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
    body: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
  },
  colors: {
    brand: sage,
    sage,
    mauve: sage, // alias supaya komponen lama tetap aman (TIDAK ungu)
    gold: { 50: '#fbf6e9', 100: '#f6ebcf', 200: '#ecd59c', 300: '#ddbb68', 400: '#cda447', 500: '#b0883a', 600: '#8c6c2e', 700: '#6a5224', 800: '#4d3c1b', 900: '#332810' },
    sky: { 50: '#eef4f8', 100: '#dbe8f1', 200: '#bad2e3', 300: '#8eb3cf', 400: '#6895b8', 500: '#4f799c', 600: '#3f6181', 700: '#334c66', 800: '#293b50', 900: '#202e3e' },
    rose: { 50: '#faf1ef', 100: '#f3dedb', 200: '#e6bcb5', 300: '#d4938a', 400: '#c27266', 500: '#a85a4e', 600: '#86473e', 700: '#653631', 800: '#4c2926', 900: '#351d1b' },
    cream: { 50: '#fdfbf6', 100: '#faf5ea', 200: '#f3e9d4', 300: '#e9dbb9', 400: '#dcc999', 500: '#cbb37e' },
    slate: {
      50: '#f7f8f5', 100: '#eef1ea', 200: '#e1e5da', 300: '#cdd3c4', 400: '#9aa390', 500: '#6f7866',
      600: '#545d4c', 700: '#3f463a', 800: '#2d322a', 900: '#1d211b',
    },
    neutral: {
      50: '#f7f8f5', 100: '#eef1ea', 200: '#e1e5da', 300: '#cdd3c4', 400: '#9aa390', 500: '#6f7866',
      600: '#545d4c', 700: '#3f463a', 800: '#2d322a', 900: '#1d211b',
    },
  },
  shadows: {
    floatingSm: '0 2px 12px -6px rgba(45,50,42,0.12)',
    floatingLg: '0 16px 44px -16px rgba(45,50,42,0.18), 0 4px 12px -6px rgba(45,50,42,0.06)',
    outline: '0 0 0 1px #FFF, 0 0 0 3px rgba(111,154,76,0.35)',
  },
  radii: { md: '8px', lg: '12px', xl: '16px', '2xl': '20px' },
  styles: {
    global: {
      'html, body, #root': { height: '100%' },
      body: {
        bg: '#f5f7f1', color: 'slate.800', fontFamily: 'body',
        WebkitFontSmoothing: 'antialiased', textWrap: 'pretty',
      },
      'h1,h2,h3,h4,h5,h6': { fontFamily: 'heading', color: 'slate.900', letterSpacing: '-0.02em', fontWeight: 700, textWrap: 'balance' },
    },
  },
  components: {
    Button: {
      defaultProps: { colorScheme: 'brand' },
      baseStyle: { borderRadius: 'lg', fontWeight: 600, letterSpacing: '0.01em', _active: { transform: 'scale(0.98)' }, transition: 'all .15s ease' },
      sizes: { lg: { h: '48px', px: 7, fontSize: 'md' } },
    },
    Heading: { baseStyle: { fontFamily: 'heading', color: 'slate.900', fontWeight: 700, letterSpacing: '-0.02em' } },
    Card: { baseStyle: { container: { borderRadius: '2xl', bg: 'white', boxShadow: 'floatingSm', border: 'none' } } },
    Input: { defaultProps: { focusBorderColor: 'brand.500' } },
    NumberInput: { defaultProps: { focusBorderColor: 'brand.500' } },
    Select: { defaultProps: { focusBorderColor: 'brand.500' } },
    Textarea: { defaultProps: { focusBorderColor: 'brand.500' } },
    Badge: { baseStyle: { borderRadius: 'md', px: 2.5, py: 1, textTransform: 'none', fontWeight: 600 } },
    Table: { baseStyle: { th: { textTransform: 'none', letterSpacing: '0', color: 'slate.500', fontWeight: 600 } } },
  },
})

export default theme
