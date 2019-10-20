class ExerciseDurationSerializer < ActiveModel::Serializer
  attributes :id, :value, :date_time, :patient_id
end
