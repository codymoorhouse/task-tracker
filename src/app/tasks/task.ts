export interface Task {
  id: number;
  name: string;
  description: string;
  estimate: number;
  status: string;
};

export const TaskStatuses = [
  'completed',
  'planned',
  'in-progress',
];

export const TaskStatusLabels = {
  'completed':    'Completed',
  'planned':      'Planned',
  'in-progress':  'In Progress'
}