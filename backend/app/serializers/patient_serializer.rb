class PatientSerializer < ActiveModel::Serializer
  attributes :id, :name, :dob, :gender, :telephone, :address, :hosp_num, :nhs_num
end
