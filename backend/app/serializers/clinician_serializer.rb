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
    self.object.patients.map do |patient|
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
        patient_contacts: patient.contacts,
        patient_health_data: {
          vital_signs: {
            heart_rate: patient.heart_rates,
            blood_pressures: patient.blood_pressures,
            resp_rates: patient.resp_rates,
            temps: patient.temps,
            o2_sats: patient.o2_sats,
            irreg_episodes: patient.irreg_episodes
          },
          anthropometrics: {
            height: patient.heights,
            weight: patient.weights
          },
          energy_balance: {
            active_calories: patient.active_calories,
            calorie_intake: patient.calorie_intakes,
          },
          exercise: {
            exercise_duration: patient.exercise_durations,
            flights_climbed: patient.flights_climbed,
            steps: patient.steps,
            time_standing: patient.time_standings
          },
          other: {
            blood_glucose: patient.blood_glucoses,
            falls: patient.falls,
            mindful_minutes: patient.mindful_minutes,
          }
        } 
      }
    end
  end

end
