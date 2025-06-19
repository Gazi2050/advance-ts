type Role = 'admin' | 'editor' | 'viewer'

type Access = {
    canEdit: boolean
    canDelete: boolean
}

const accessMap: Record<Role, Access> = {
    admin: { canEdit: true, canDelete: true },
    editor: { canEdit: true, canDelete: false },
    viewer: { canEdit: false, canDelete: false }
}

console.log('Access Map:', accessMap)
