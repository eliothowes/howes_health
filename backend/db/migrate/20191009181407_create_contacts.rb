class CreateContacts < ActiveRecord::Migration[5.2]
  def change
    create_table :contacts do |t|
      t.timestamp :date_time
      t.integer :duration
      t.string :contact_type
      t.references :patient, foreign_key: true
      t.references :clinician, foreign_key: true

      t.timestamps
    end
  end
end
