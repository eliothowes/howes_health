class ClinicianSerializer < ActiveModel::Serializer
  attributes :name, :username, :email, :specialty
end
