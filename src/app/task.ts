export class Task {
    static nextId = 0;

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
      new Task(1, 'Take out the trash', 'Collect the trash from the garbage cans around the house and take outside.', 3),
      new Task(2, 'Clean the dishes',   'Wipe and wash each dish in the sink and put back in the cupboards.', 5, 'completed'),
      new Task(3, 'Pay the bills', 'Get the mail from the mailbox and log in online to pay the bills.', 2, 'in-progress'),
    ];

    constructor(
        public id?: number, 
        public name?: string,
        public description?: string,
        public estimate?: number,
        public status: string = 'planned'
        ) {
        this.id = id ? id : Task.nextId++;


        if (Task.statuses.includes(status)) {
          this.status = status;
        } else {
          console.error('ERROR: Could not set status, must be one of:', Task.statuses.join(', '))
        }
      }


      static getStatusLabel(status): string {
          return Task.statusesMap[status];
      }

      clone(): Task {
        return Object.assign(new Task(), this);
      }
}