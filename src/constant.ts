type ThemeVariables = {
  [key: string]: string;
}

export const darkThemeColors: ThemeVariables=  {
    '--background-color': 'rgb(36, 36, 36)',
    '--text-color': 'rgba(255,255,255, 1)',
    '--text-color-lighter': 'rgba(255,255,255, 0.7)',
		'--image-filter': 'grayscale(1)'
}

export const lightThemeColors:ThemeVariables =  {
    '--background-color': '#fff',
    '--text-color': '#000',
    '--text-color-lighter': 'rgb(77, 77, 77)',
		'--image-filter': 'none'
}

export const basePath = process.env.NODE_ENV == 'production' ? "/cv-nextjs" : '';
