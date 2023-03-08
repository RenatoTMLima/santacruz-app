export interface User {
  ref: {
    id: string;
  }
  data: {
    email: string;
    password: string;
    first_name: string;
    last_name: string;
  }
}