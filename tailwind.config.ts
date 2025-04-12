
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom colors for Megdan using the new palette
				megdan: {
					primary: '#614EC1', // iris
					secondary: '#484877', // ultra-violet
					accent: '#74F269', // screamin-green
					light: '#D3D4D9', // platinum
					dark: '#107778', // myrtle-green
				},
				// New color palette
				palette: {
					platinum: '#D3D4D9',
					iris: '#614EC1',
					green: '#74F269',
					teal: '#107778',
					violet: '#484877',
				}
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				heading: ['Poppins', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-top': 'linear-gradient(0deg, #D3D4D9, #614EC1, #74F269, #107778, #484877)',
				'gradient-right': 'linear-gradient(90deg, #D3D4D9, #614EC1, #74F269, #107778, #484877)',
				'gradient-bottom': 'linear-gradient(180deg, #D3D4D9, #614EC1, #74F269, #107778, #484877)',
				'gradient-left': 'linear-gradient(270deg, #D3D4D9, #614EC1, #74F269, #107778, #484877)',
				'gradient-top-right': 'linear-gradient(45deg, #D3D4D9, #614EC1, #74F269, #107778, #484877)',
				'gradient-bottom-right': 'linear-gradient(135deg, #D3D4D9, #614EC1, #74F269, #107778, #484877)',
				'gradient-top-left': 'linear-gradient(225deg, #D3D4D9, #614EC1, #74F269, #107778, #484877)',
				'gradient-bottom-left': 'linear-gradient(315deg, #D3D4D9, #614EC1, #74F269, #107778, #484877)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
