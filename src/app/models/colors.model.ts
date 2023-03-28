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
        'bg-sky-700': true,
        'hover:bg-sky-800': true,
        'text-white': true
    },
    blue: {
        'bg-blue-700': true,
        'hover:bg-blue-800': true,
        'text-white': true
    },
    gray: {
        'bg-gray-700': true,
        'hover:bg-gray-800': true,
        'text-white': true
    },
    green: {
        'bg-green-700': true,
        'hover:bg-green-800': true,
        'text-white': true
    },
    red: {
        'bg-red-700': true,
        'hover:bg-red-800': true,
        'text-white': true
    },
    violet: {
        'bg-violet-700': true,
        'hover:bg-violet-800': true,
        'text-white': true
    },
    yellow: {
        'bg-yellow-700': true,
        'hover:bg-yellow-800': true,
        'text-white': true
    }
}
