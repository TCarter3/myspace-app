100.times do
    first_name = Faker::FunnyName.name
    bio = Faker::Movie.quote
    avatar = Faker::Avatar.image(slug: "pic", size: '100x400', format: 'png', set: 'set5')
    Account.create(first_name: first_name, bio: bio, avatar: avatar)
end

puts "100 Friends seeded.. go find them!"