exports.seed = function(knex, Promise) {
  return knex("actions").insert([
    {
      description: "Plant First Tree",
      notes: "Plant Tree",
      completed: true,
      project_id: 1
    }, // 1
    {
      description: "Plant Second Tree",
      notes: "Plant Tree",
      completed: true,
      project_id: 1
    }, // 2
    {
      description: "Plant Third Tree",
      notes: "Plant Tree",
      completed: false,
      project_id: 1
    }, // 3
    {
      description: "Plant Fourth Tree",
      notes: "Plant Tree",
      completed: false,
      project_id: 1
    }, // 4
    {
      description: "Plant Fifth Tree",
      notes: "Plant Tree",
      completed: false,
      project_id: 1
    }, // 5
    {
      description: "Invite FB Employee",
      notes: "Ask FB to talk to us.  When he agrees, setup time",
      completed: true,
      project_id: 2
    } // 6
  ]);
};
