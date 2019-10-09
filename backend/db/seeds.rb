# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


### Patient Seeds ###
5.times {
    Patient.create(name: Faker::Name.name, dob: Faker::Date.birthday(min_age: 0, max_age: 117), gender: Faker::Gender.binary_type, telephone: Faker::PhoneNumber.phone_number, address: '', hosp_num: '', nhs_num: Faker::NationalHealthService.british_number) 
}

### Patient Seeds ###
5.times {
    Clinician.create(name: Faker::Name.name, username: Faker::Internet.username, email: Faker::Internet.email, password_digest: '12345', specialty: 'GP') 
}

3.times {
    Contact.create(date_time: `#{Faker::Date.between(from: 2.days.ago, to: Date.today)} #{rand(1..12)}:#{rand(0..60)}`, duration: 30, contact_type: 'GP Consultation', patient_id: rand(1..5), clinician_id: rand(1..5))
}

10.times {
    HeartRate.create(value: rand(40..220), date_time: `#{Faker::Date.between(from: 10.days.ago, to: Date.today)} #{rand(1..12)}:#{rand(0..60)}`, patient_id: rand(1..5)) 
}

10.times {
    BloodPressure.create(systolic_value: rand(100..220), diastolic_value: rand(60..90), date_time: `#{Faker::Date.between(from: 10.days.ago, to: Date.today)} #{rand(1..12)}:#{rand(0..60)}`, patient_id: rand(1..5)) 
}

10.times {
    O2Sat.create(value: rand(60..100), date_time: `#{Faker::Date.between(from: 10.days.ago, to: Date.today)} #{rand(1..12)}:#{rand(0..60)}`, patient_id: rand(1..5)) 
}

10.times {
    Temp.create(value: rand(35.5..38.5), date_time: `#{Faker::Date.between(from: 10.days.ago, to: Date.today)} #{rand(1..12)}:#{rand(0..60)}`, patient_id: rand(1..5))
}

10.times {
    RespRate.create(value: rand(8..18), date_time: `#{Faker::Date.between(from: 10.days.ago, to: Date.today)} #{rand(1..12)}:#{rand(0..60)}`, patient_id: rand(1..5)) 
}