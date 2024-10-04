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

export interface Task {
  id: string;
  title: string;
  description: string;
  assignee: string;
  uid: string;
  status: string;
  startDate: any;
  dueDate: any;
  completedDate: any;
  labels: string[];
  projectId: string;
  attachments: Attachment[];
  subTasks: Task[];
  comments: Comment[];
  histories: History[];
}
