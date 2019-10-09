class CreateActiveCalories < ActiveRecord::Migration[5.2]
  def change
    create_table :active_calories do |t|
      t.integer :value
      t.timestamp :date_time
      t.references :patient, foreign_key: true

      t.timestamps
    end
  end
end
