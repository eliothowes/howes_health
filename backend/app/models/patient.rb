class Patient < ApplicationRecord
    has_many :contacts

    has_many :active_calories
    has_many :blood_glucoses
    has_many :blood_pressures
    has_many :calorie_intakes
    has_many :exercise_durations
    has_many :falls
    has_many :flights_climbed
    has_many :heart_rates
    has_many :heights
    has_many :irreg_episodes
    has_many :mindful_minutes
    has_many :o2_sats
    has_many :resp_rates
    has_many :steps
    has_many :temps
    has_many :time_standings
    has_many :weights

    def active_calories
        ActiveCalorie.all.filter{|calories| calories.patient_id == self.id ? calories : nil}
    end

end
