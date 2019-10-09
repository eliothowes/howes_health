class Contact < ApplicationRecord
  belongs_to :patient
  belongs_to :clinician
end
