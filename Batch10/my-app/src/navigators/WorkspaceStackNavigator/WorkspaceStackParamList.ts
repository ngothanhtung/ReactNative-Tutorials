import { Project } from '@/types';

export type WorkspaceStackParamList = {
  CreateWorkspace: undefined;
  Examples: undefined;
  Projects: undefined;
  Tasks: { project: Project };
};
