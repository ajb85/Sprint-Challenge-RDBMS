exports.seed = function(knex, Promise) {
  return knex("projects").insert([
    {
      name: "Plant 5 Trees",
      description: "We are going to plant five trees",
      completed: false
    }, // 1
    {
      name: "Invite Facebook employee to Lambda",
      description:
        "Invite a Facebook employee to talk to Lambda students about life in the field",
      completed: true
    } // 2
  ]);
};
