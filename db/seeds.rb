# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: 'Riot_Vibez', email: 'riot@email.com', password:'123456', dream_scene: "https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", mantra: 'Expect nothing and appreciate everything')

Encounter.create(encounter_description: 'Anyone up for hiking this weekend?! Hit me up!', user_id:1)
Encounter.create(encounter_description: 'A new ice cream place opened on Kent. Want to meet up over something sweet?', user_id:1)


User.create(username: 'Shimmering_Prism', email: 'shimmering@email.com', password: 'password', dream_scene: "https://images.pexels.com/photos/479385/pexels-photo-479385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", mantra: 'The best views come after the hardest climb')

Encounter.create(encounter_description: 'A new show is opening this Thursday in Chelsea. Who wants to go?', user_id:2)
Encounter.create(encounter_description: 'My bestie and I will be ice skating at The Standard tomorrow. A good place to break the ice. Rock and roll with us?', user_id:2)

User.create(username: 'Drunken_Noodles', email: 'drunken@email.com', password: 'myPassword', dream_scene: "https://images.pexels.com/photos/3512846/pexels-photo-3512846.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", mantra: 'First learn the rules, then break them')

Encounter.create(encounter_description: 'Who cares for a jazz concert at Buenote this Thursday?', user_id:3)
Encounter.create(encounter_description: 'Our block party is serving mixers this weekend. All are welcome. Come by and say hi! I will be in the pokemon costume.', user_id:3)

p "#{User.count} users created"

Comment.create(encounter_comment: 'sounds good. I will come with my sorrority.', encounter_id: 1)
Comment.create(encounter_comment: 'I would be up for that, maybe a little bit later.', encounter_id: 2)
Comment.create(encounter_comment: 'there will be a storm this weekend. Not the best time for a block party.', encounter_id: 3)
Comment.create(encounter_comment: 'I checked the schedule for Bluenote. There is no jazz concert on Thursday.', encounter_id: 4)
Comment.create(encounter_comment: 'I would be interested. Who is playing?', encounter_id: 5)
Comment.create(encounter_comment: 'Sounds interesting. Share more about yourself?', encounter_id: 6)