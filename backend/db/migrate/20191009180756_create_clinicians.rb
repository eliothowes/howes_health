class CreateClinicians < ActiveRecord::Migration[5.2]
  def change
    create_table :clinicians do |t|
      t.string :name
      t.string :username
      t.string :email
      t.string :password_digest
      t.string :specialty

      t.timestamps
    end
  end
end
