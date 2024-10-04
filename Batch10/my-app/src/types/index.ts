export interface Comment {
  id: string;
  content: string;
  createdTime: any;
  uid: string;
  attachments: Attachment[];
}

export interface History {
  id: string;
  action: string;
  updatedTime: any;
  uid: string;
}

export interface Attachment {
  fileName: string;
  type: 'document' | 'image';
  url: string;
}

export interface Project {
  id?: string;
  name: string;
  description?: string;
  members?: Member[];
}

export interface Member {
  id: string;
  role: string;
  uid: string;
}

export interface Task {
  id?: string;
  title?: string;
  description?: string;
  assignee: any;
  uid: any;
  status?: 'To do' | 'In progress' | 'Done';
  startDate?: Date;
  dueDate?: Date;
  completedDate?: Date;
  labels?: string[];
  project?: any;
  attachments?: Attachment[];
  subTasks?: Task[];
  comments?: Comment[];
  histories?: History[];

  createdTime?: Date;
  updatedTime?: Date;
}
