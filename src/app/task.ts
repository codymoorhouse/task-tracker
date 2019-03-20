export class Task {
    static nextId = 0;

    readonly statusesMap: Object = {
        'planned':      'Planned',
        'in-progress':  'In Progress',
        'completed':    'Completed'
    };

    readonly statuses: String[] = [
        'planned',
        'in-progress',
        'completed',
    ];

    static tasks: Task[] = [
      new Task(1, 'Take out the trash', 'Collect the trash from the garbage cans around the house and take outside.'),
      new Task(2, 'Clean the dishes',   'Wipe and wash each dish in the sink and put back in the cupboards.' ),
      new Task(3, 'Pay the bills', 'Get the mail from the mailbox and log in online to pay the bills.' ),
    ];

    constructor(
        public id?: number, 
        public name?: string,
        public description?: string,
        public estimate?: number,
        ) {
        this.id = id ? id : Task.nextId++;
        this.status = 'planned';
      }

      getStatusLabel(): String {
          return this.statusesMap[this.status];
      }

      set status(status: string) {
        if (this.statuses.includes(status)) {
            this.status = 'status';
        }
      }

      clone(): Task {
        return Object.assign(new Task(), this);
      }
}