class BloodGlucoseSerializer < ActiveModel::Serializer
  attributes :id, :value, :date_time, :patient_id
end
