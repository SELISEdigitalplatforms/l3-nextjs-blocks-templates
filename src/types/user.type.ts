export type User = {
  itemId: string;
  createdDate: string;
  lastUpdatedDate: string;
  language: string;
  salutation: string | null;
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  phoneNumber: string | null;
  roles: string[];
  active: boolean;
  isVarified: boolean;
};