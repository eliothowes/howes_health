class BloodPressureSerializer < ActiveModel::Serializer
  attributes :id, :systolic_value, :diastolic_value, :date_time, :patient_id
end
