class ActiveCalorie < ApplicationRecord
  belongs_to :patient

  # self.table_name = 'ActiveCalories'
end
