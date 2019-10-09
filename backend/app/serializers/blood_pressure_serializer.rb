class BloodPressureSerializer < ActiveModel::Serializer
  attributes :id, :systolic_value, :diastolic_value, :date_time
  has_one :patient
end
