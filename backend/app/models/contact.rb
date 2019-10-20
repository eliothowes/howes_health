class Contact < ApplicationRecord
  belongs_to :patient
  belongs_to :clinician

  def date_time
    return "#{self.attributes['date_time'].to_date.to_s} #{self.attributes['date_time'].to_s.split(' ')[1].split(':').slice(-0, 2).join(':')}"
  end

end
