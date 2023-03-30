export type Colors = 'sky' | 'blue' | 'gray' | 'green' | 'red' | 'violet' | 'yellow' | 'danger' | 'primary' | 'shadow' | 'success';

export type GetColors = Record<Colors, Record<string, boolean>>;

export const COLORS: GetColors = {
    success: {
        'text-white': true,
        'bg-success-600': true,
        'hover:bg-success-800': true,
        'focus:ring-success-300': true
    },
    danger: {
        'text-white': true,
        'bg-danger-600': true,
        'hover:bg-danger-800': true,
        'focus:ring-danger-300': true
    },
    primary: {
        'text-white': true,
        'bg-primary-600': true,
        'hover:bg-primary-800': true,
        'focus:ring-primary-300': true
    },
    shadow: {
        'text-black': true,
        'bg-gray-200': true,
        'hover:bg-gray-500': true,
        'focus:ring-gray-50': true
    },
    sky: {
        'bg-sky-500': true,
        'hover:bg-sky-800': true,
        'text-white': true
    },
    blue: {
        'bg-blue-500': true,
        'hover:bg-blue-800': true,
        'text-white': true
    },
    gray: {
        'bg-gray-500': true,
        'hover:bg-gray-800': true,
        'text-white': true
    },
    green: {
        'bg-green-500': true,
        'hover:bg-green-800': true,
        'text-white': true
    },
    red: {
        'bg-red-500': true,
        'hover:bg-red-800': true,
        'text-white': true
    },
    violet: {
        'bg-violet-500': true,
        'hover:bg-violet-800': true,
        'text-white': true
    },
    yellow: {
        'bg-yellow-500': true,
        'hover:bg-yellow-800': true,
        'text-white': true
    }
}

export const BACKGROUND_COLORS: GetColors = {
    success: {
        'bg-success-500': true
    },
    danger: {
        'bg-danger-500': true
    },
    primary: {
        'bg-primary-500': true
    },
    shadow: {
        'bg-gray-100': true
    },
    sky: {
        'bg-sky-400': true
    },
    blue: {
        'bg-blue-400': true
    },
    gray: {
        'bg-gray-400': true
    },
    green: {
        'bg-green-400': true
    },
    red: {
        'bg-red-400': true
    },
    violet: {
        'bg-violet-400': true
    },
    yellow: {
        'bg-yellow-400': true
    }
}

export const NAVBAR_BACKGROUND_COLORS: GetColors = {
    success: {
        'bg-success-500': true
    },
    danger: {
        'bg-danger-500': true
    },
    primary: {
        'bg-primary-500': true
    },
    shadow: {
        'bg-gray-100': true
    },
    sky: {
        'bg-sky-500': true
    },
    blue: {
        'bg-blue-500': true
    },
    gray: {
        'bg-gray-500': true
    },
    green: {
        'bg-green-500': true
    },
    red: {
        'bg-red-500': true
    },
    violet: {
        'bg-violet-500': true
    },
    yellow: {
        'bg-yellow-500': true
    }
}
