class FlightsClimbed < ApplicationRecord
  belongs_to :patient

  self.pluralize_table_names = false
end
