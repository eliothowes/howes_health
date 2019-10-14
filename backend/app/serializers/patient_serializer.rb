class PatientSerializer < ActiveModel::Serializer
  attributes :name, :dob, :gender, :telephone, :address, :hosp_num, :nhs_num
end
