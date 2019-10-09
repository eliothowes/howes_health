class CreatePatients < ActiveRecord::Migration[5.2]
  def change
    create_table :patients do |t|
      t.string :name
      t.date :dob
      t.string :gender
      t.string :telephone
      t.string :address
      t.string :hosp_num
      t.string :nhs_num

      t.timestamps
    end
  end
end
