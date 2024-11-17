export type ITodoStatus = "pending" | "done";

interface ILink {
  name: string;
  url: string;
}

export interface ITodo {
  id: string;
  ref: string;
  title: string;
  description: React.ReactNode;
  status: ITodoStatus;
  required: boolean;
  links?: ILink[];
}
