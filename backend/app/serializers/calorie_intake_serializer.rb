class CalorieIntakeSerializer < ActiveModel::Serializer
  attributes :id, :value, :date_time, :patient_id
end
