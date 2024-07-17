/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-green': '#00A762',
        'background-color': '#F0F5F3',
        'google-button-color': '#D0D3D9',
        'green-text' : '#004629',
        'good-morning-text': '#0A2759',
        'lead-upper-blue' : '#E8EFFB',
        'second-drawer-background' : '#009859',
        'pending-background': '#FEF4E6',
        'pendingText': '#F79009',
        'operation-green': '#E6F6EF',
        'operaion-text-green': '#007746',
        'underwriting-blue': '#E8EFFB',
        'declined-bgcolor': '#FAE6E6',
        'approved-text' : "#004629",
        'lender-green-text': '#004629'
      },
    },
  },
  plugins: [],
}

