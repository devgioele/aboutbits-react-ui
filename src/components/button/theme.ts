export default {
  button: {
    base: 'font-medium rounded-lg outline-1 outline-offset-2 focus:outline',
    variantSize: {
      base: {
        sm: 'px-4 py-1.5 text-sm leading-5',
        md: 'px-6 py-2.5 text-sm leading-5',
        lg: 'px-8 py-4 text-lg leading-7',
      },
      ghost: {
        sm: 'px-4-1px py-1.5-1px border',
        md: 'px-6-1px py-2.5-1px border',
        lg: 'px-8-1px py-4-1px border',
      },
    },
  },
  buttonLink: {
    base: 'inline-block text-center',
  },
  withIcon: {
    iconContainer: {
      base: 'flex justify-center items-center',
    },
    icon: {
      base: 'fill-current',
      size: {
        sm: 'mr-2 w-4 h-4',
        md: 'mr-3 w-6 h-6',
        lg: 'mr-3 w-6 h-6',
      },
    },
  },
  variantTone: {
    solid: {
      primary:
        'bg-primary-500 hover:bg-primary-600 text-white outline-primary-500',
      neutral:
        'bg-neutral-700 hover:bg-neutral-900 text-white outline-neutral-800',
      critical:
        'bg-critical-500 hover:bg-critical-600 text-white outline-critical-500',
      warning:
        'bg-warning-500 hover:bg-warning-600 text-white outline-warning-500',
      success:
        'bg-success-500 hover:bg-success-600 text-white outline-success-500',
      informative:
        'bg-informative-500 hover:bg-informative-600 text-white outline-informative-500',
      disabled: 'bg-neutral-200 text-neutral-700 border-neutral-200',
    },
    ghost: {
      primary:
        'hover:bg-primary-50 focus:bg-primary-50 border-primary-500 focus:border-transparent text-primary-500 outline-primary-500',
      neutral:
        'hover:bg-neutral-100 focus:bg-neutral-100 border-neutral-700 focus:border-transparent text-neutral-700 outline-neutral-700',
      critical:
        'hover:bg-critical-50 focus:bg-critical-50 border-critical-500 focus:border-transparent text-critical-500 outline-primary-500',
      warning:
        'hover:bg-warning-50 focus:bg-warning-50 border-warning-500 focus:border-transparent text-warning-500 outline-primary-500',
      success:
        'hover:bg-success-50 focus:bg-success-50 border-success-500 focus:border-transparent text-success-500 outline-primary-500',
      informative:
        'hover:bg-informative-50 focus:bg-informative-50 border-informative-500 focus:border-transparent text-informative-500 outline-primary-500',
      disabled: 'border-neutral-200 text-neutral-700',
    },
    transparent: {
      primary: 'hover:bg-primary-50 text-primary-500 focus:outline-primary-500',
      neutral:
        'hover:bg-neutral-100 text-neutral-700 focus:outline-neutral-700',
      critical:
        'hover:bg-critical-50 text-critical-500 focus:outline-critical-500',
      warning: 'hover:bg-warning-50 text-warning-500 focus:outline-warning-500',
      success: 'hover:bg-success-50 text-success-500 focus:outline-success-500',
      informative:
        'hover:bg-informative-50 text-informative-500 focus:outline-informative-500',
      disabled: 'text-neutral-700',
    },
  },
}
