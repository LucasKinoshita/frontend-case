export type ITodoStatus = "pending" | "done";

interface Link {
  name: string;
  url: string;
}

export interface ITodo {
  id: string;
  ref: string;
  title: string;
  description: React.ReactNode;
  status: "pending" | "done";
  required: boolean;
  links?: Link[];
}
