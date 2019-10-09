class Clinician < ApplicationRecord
    has_secure_password

    has_many :contacts
    has_many :patients, through: :contacts
end
