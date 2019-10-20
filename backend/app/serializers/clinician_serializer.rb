class ClinicianSerializer < ActiveModel::Serializer
  attributes :details, :patients
  # has_many :patients
  
  # class PatientSerializer < ActiveModel::Serializer
  #   attributes :id, :name
  # end

  def details
    {
      name: self.object.name,
      username: self.object.username,
      specialty: self.object.specialty
    }
  end
  
  def patients
    self.object.patients.uniq.map do |patient|
      {id: patient.id,
        patient_details: 
        {
          name: patient.name,
          dob: patient.dob,
          gender: patient.gender,
          hosp_num: patient.hosp_num,
          nhs_num: patient.nhs_num,
          address: patient.address,
          telephone: patient.telephone
        },
        patient_contacts: patient.contacts.sort{|contact1, contact2| contact1.date_time <=> contact2.date_time},
        patient_health_data: {
          vital_signs: {
            heart_rate: patient.heart_rates.sort{|hr1, hr2| hr2.date_time <=> hr1.date_time},
            blood_pressures: patient.blood_pressures.sort{|bp1, bp2| bp2.date_time <=> bp1.date_time},
            resp_rates: patient.resp_rates.sort{|rr1, rr2| rr2.date_time <=> rr1.date_time},
            temps: patient.temps.sort{|temp1, temp2| temp2.date_time <=> temp1.date_time},
            o2_sats: patient.o2_sats.sort{|sats1, sats2| sats2.date_time <=> sats1.date_time},
            irreg_episodes: patient.irreg_episodes.sort{|irreg1, irreg2| irreg2.date_time <=> irreg1.date_time}
          },
          anthropometrics: {
            height: patient.heights.sort{|h1, h2| h2.date_time <=> h1.date_time},
            weight: patient.weights.sort{|w1, w2| w2.date_time <=> w1.date_time}
          },
          energy_balance: {
            active_calories: patient.active_calories.sort{|ac1, ac2| ac2.date_time <=> ac1.date_time},
            calorie_intake: patient.calorie_intakes.sort{|ci1, ci2| ci2.date_time <=> ci1.date_time},
          },
          exercise: {
            exercise_duration: patient.exercise_durations.sort{|exs1, exs2| exs2.date_time <=> exs1.date_time},
            flights_climbed: patient.flights_climbed.sort{|fc1, fc2| fc2.date_time <=> fc1.date_time},
            steps: patient.steps.sort{|step1, step2| step2.date_time <=> step1.date_time},
            time_standing: patient.time_standings.sort{|stand1, stand2| stand2.date_time <=> stand1.date_time}
          },
          other: {
            blood_glucose: patient.blood_glucoses.sort{|bg1, bg2| bg2.date_time <=> bg1.date_time},
            falls: patient.falls.sort{|falls1, falls2| falls2.date_time <=> falls1.date_time},
            mindful_minutes: patient.mindful_minutes.sort{|mm1, mm2| mm2.date_time <=> mm1.date_time},
          }
        } 
      }
    end
  end

end
