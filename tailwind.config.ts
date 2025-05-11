import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor:{
        primario: '#4B4B4B',
        secundario: '#1E88E5',
        acento: '#FF6F00',
        fondoclaro: '#F5F5F5',
        textoprincipal: '#FFFFFF',
        textosecundario: '#B0B0B0'
      },
      backgroundImage: {
        'bannerRight': "url('/assets/dots-light.svg')",
        'banner2': "url('/assets/PORTADA3.jpeg')",
        'banner3': "url('/assets/PORTADA1.jpg')",
        'postBrandLeft': "url('/assets/campaign-cover-countdown.jpg')",
        'whychoose': "url('/assets/dots-yellow.svg')",
        'weHelp': "url('/assets/dots-green.svg')"
      },
      colors: {
        primary: "#2f2f2f",
        "primario": "#4B4B4B",
        secundario: '#1E88E5',
        acento: '#FF6F00',
        fondoclaro: '#F5F5F5',
        textoprincipal: '#FFFFFF',
        textosecundario: '#B0B0B0',
        whatsapp: '#0df053'
      },
      fontFamily: {
        poppins: ["Roboto", "sans-serif"],
        primaSans: ["sans-serif"],
      },
      borderColor:{
        'weHelp': "#3b5d50",        
      },
      fontWeight: {
        boldCustomer: '400',
      },
      padding: {
        a: "19.2px 34.4px 40px 34px",
      },
      boxShadow: {
        // x y opacidad tamaño de profundidad color, borde-> x y opacidad tamaño color
        shadowPilares: "-5px 20px 25px 10px rgb(223 36 36 / 0.1), 0 4px 6px -4px rgb(223 36 36 / 0.1)",
      },
      animation: {
        'animate-spin': 'spin 4s linear infinite',
        'animate-spin-reverse': 'spin-reverse 6s linear infinite',
      },
      keyframes: {
        "spin-reverse": {
          'to': { transform: 'rotate(-1turn)' },
        }
      },
      transitionProperty: {
        'products': '.3s all ease'
      },
      gridTemplateColumns: {
        "weHelp": "repeat(27, 1fr)"
      }
    }, 
    screens: {
      "xxs": "280px",
      "xs": "320px",
      "ss": "480px",
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "x": "1216px",
      "xl": "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
}
export default config