class CreateBloodPressures < ActiveRecord::Migration[5.2]
  def change
    create_table :blood_pressures do |t|
      t.integer :systolic_value
      t.integer :diastolic_value
      t.timestamp :date_time
      t.references :patient, foreign_key: true

      t.timestamps
    end
  end
end
