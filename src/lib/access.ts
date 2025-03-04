import type { Access } from 'payload'

export const anyone: Access = () => true

export const admin: Access = ({ req: { user } }) => {
  if (!user) return false

  return user.role === 'admin'
}

export const editor: Access = ({ req: { user } }) => {
  if (!user) return false

  return user.role === 'editor'
}

export const currentUser: Access = ({ req: { user }, id }) => {
  if (!user) return false

  return user.id === id
}

export const adminOrCurrentUser: Access = ({ req: { user }, id }) => {
  if (!user) return false

  return user.role === 'admin' || user.id === id
}
