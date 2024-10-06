import { Timestamp } from 'firebase/firestore';

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
  id?: string; // auto-generated
  name: string;
  topic?: 'Development' | 'Design' | 'Marketing' | 'Others';
  color?: string;
  description?: string;
  members?: Member[];
}

export interface Member {
  id?: string;
  role: string;
  uid: string | any;
}

export interface Task {
  id?: string;
  title?: string;
  description?: string;
  assignee: any;
  uid: any;
  status?: 'To do' | 'In progress' | 'Done';
  startDate?: Date;
  dueDate?: any; // Date | Timestamp;
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
