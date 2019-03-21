export class Task {
    static nextId = 1;

    static readonly statusesMap: Object = {
        'planned':      'Planned',
        'in-progress':  'In Progress',
        'completed':    'Completed'
    };

    static readonly statuses: String[] = [
        'planned',
        'in-progress',
        'completed',
    ];

    static tasks: Task[] = [
      new Task('Take out the trash', 'Collect the trash from the garbage cans around the house and take outside.', 3),
      new Task('Clean the dishes',   'Wipe and wash each dish in the sink and put back in the cupboards.', 5, 'completed'),
      new Task('Pay the bills', 'Get the mail from the mailbox and log in online to pay the bills.', 2, 'in-progress'),
    ];

    public id: number;

    constructor(
        public name?: string,
        public description?: string,
        public estimate?: number,
        public status: string = 'planned'
        ) {
        this.id = Task.nextId++;

        if (Task.statuses.includes(status)) {
          this.status = status;
        } else {
          console.error('ERROR: Could not set status, must be one of:', Task.statuses.join(', '))
        }
      }

      static getStatusLabel(status): string {
          return Task.statusesMap[status];
      }

      static add(task: Task) {
        Task.tasks.push(task);
      }

      static remove(taskId: number) {
        let idx = Task.tasks.findIndex(t => t.id == taskId);
        if (idx > -1) {
          Task.tasks.splice(idx, 1);
          this.updateTaskIds();
        }
      }

      static updateTaskIds() {
        Task.tasks.forEach((t, idx) => t.id = idx + 1);
        Task.nextId = Task.tasks.length + 1;
      }

      clone(): Task {
        return Object.assign(new Task(), this);
      }
}