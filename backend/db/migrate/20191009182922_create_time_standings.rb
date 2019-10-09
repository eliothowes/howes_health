class CreateTimeStandings < ActiveRecord::Migration[5.2]
  def change
    create_table :time_standings do |t|
      t.integer :value
      t.timestamp :date_time
      t.references :patient, foreign_key: true

      t.timestamps
    end
  end
end
