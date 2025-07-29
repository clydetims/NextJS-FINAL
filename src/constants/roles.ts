
// Role types & role constants

export type UserRole = 'guest' | 'financial' | 'admin'

export const ROLES = {
    GUEST: 'guest',
    FINANCIAL: 'financial',
    ADMIN:  'admin',
} as const;