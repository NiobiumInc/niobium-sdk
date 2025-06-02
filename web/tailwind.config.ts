import { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography'
import resolveConfig from 'tailwindcss/resolveConfig'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // App Router files
    './components/**/*.{js,ts,jsx,tsx}', // Component files
  ],
  theme: {
  	extend: {
      typography: (theme: (path: string) => string | number) => ({
        DEFAULT: {
          css: {
            color: theme('colors.zinc.800'),
            a: {
              color: theme('colors.blue.600'),
              '&:hover': {
                color: theme('colors.blue.800'),
              },
              textDecoration: 'underline',
            },
            code: {
              color: theme('colors.pink.600'),
              backgroundColor: theme('colors.zinc.100'),
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
            },
            h1: {
              fontWeight: '200',
              letterSpacing: '-0.025em',
              fontSize: theme('fontSize.2xl'),
              color: theme('colors.zinc.900'),
            },
            h2: {
              fontWeight: '200',
              fontSize: theme('fontSize.xl'),
            },
            h3: {
              fontWeight: '200',
            },
            h4: {
              fontWeight: '200',
            },
            h5: {
              fontWeight: '200',
            },
            h6: {
              fontWeight: '200',
            }
          },
        },
        invert: {
          css: {
            color: theme('colors.zinc.200'),
            a: {
              color: theme('colors.blue.400'),
              '&:hover': {
                color: theme('colors.blue.200'),
              },
            },
            code: {
              color: theme('colors.pink.300'),
              backgroundColor: theme('colors.zinc.800'),
            },
            h1: {
              color: theme('colors.zinc.100'),
            },
          },
        },
      }),
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [typography, require("tailwindcss-animate")], // Add any plugins here
};

export default config;
