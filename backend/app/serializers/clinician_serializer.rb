class ClinicianSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :email, :password_digest, :specialty
end
