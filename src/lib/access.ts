import type { Access } from "payload";

export const anyone: Access = () => true;

export const currentUser: Access = ({ req: { user }, id }) => {
  if (!user) return false;

  return user.id === id;
};

export const editorOrCurrentUser: Access = ({ req: { user }, id }) => {
  if (!user) return false;

  return user.role === "editor" || user.id === id;
};

export const editor: Access = ({ req: { user } }) => {
  if (!user) return false;

  return user.role === "editor";
};

export const editorOrAdmin: Access = ({ req: { user } }) => {
  if (!user) return false;

  return user.role === "editor" || user.role === "admin";
};

export const adminOrCurrentUser: Access = ({ req: { user }, id }) => {
  if (!user) return false;

  return user.role === "admin" || user.id === id;
};

export const admin: Access = ({ req: { user } }) => {
  if (!user) return false;

  return user.role === "admin";
};
