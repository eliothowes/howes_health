# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_10_09_183132) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_calories", force: :cascade do |t|
    t.integer "value"
    t.datetime "date_time"
    t.bigint "patient_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["patient_id"], name: "index_active_calories_on_patient_id"
  end

  create_table "blood_glucoses", force: :cascade do |t|
    t.float "value"
    t.datetime "date_time"
    t.bigint "patient_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["patient_id"], name: "index_blood_glucoses_on_patient_id"
  end

  create_table "blood_pressures", force: :cascade do |t|
    t.integer "systolic_value"
    t.integer "diastolic_value"
    t.datetime "date_time"
    t.bigint "patient_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["patient_id"], name: "index_blood_pressures_on_patient_id"
  end

  create_table "calorie_intakes", force: :cascade do |t|
    t.integer "value"
    t.datetime "date_time"
    t.bigint "patient_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["patient_id"], name: "index_calorie_intakes_on_patient_id"
  end

  create_table "clinicians", force: :cascade do |t|
    t.string "name"
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.string "specialty"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "contacts", force: :cascade do |t|
    t.datetime "date_time"
    t.integer "duration"
    t.string "contact_type"
    t.bigint "patient_id"
    t.bigint "clinician_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["clinician_id"], name: "index_contacts_on_clinician_id"
    t.index ["patient_id"], name: "index_contacts_on_patient_id"
  end

  create_table "exercise_durations", force: :cascade do |t|
    t.integer "value"
    t.datetime "date_time"
    t.bigint "patient_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["patient_id"], name: "index_exercise_durations_on_patient_id"
  end

  create_table "falls", force: :cascade do |t|
    t.integer "value"
    t.datetime "date_time"
    t.bigint "patient_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["patient_id"], name: "index_falls_on_patient_id"
  end

  create_table "flights_climbed", force: :cascade do |t|
    t.integer "value"
    t.datetime "date_time"
    t.bigint "patient_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["patient_id"], name: "index_flights_climbed_on_patient_id"
  end

  create_table "heart_rates", force: :cascade do |t|
    t.integer "value"
    t.datetime "date_time"
    t.bigint "patient_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["patient_id"], name: "index_heart_rates_on_patient_id"
  end

  create_table "heights", force: :cascade do |t|
    t.float "value"
    t.datetime "date_time"
    t.bigint "patient_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["patient_id"], name: "index_heights_on_patient_id"
  end

  create_table "irreg_episodes", force: :cascade do |t|
    t.integer "value"
    t.datetime "date_time"
    t.bigint "patient_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["patient_id"], name: "index_irreg_episodes_on_patient_id"
  end

  create_table "mindful_minutes", force: :cascade do |t|
    t.integer "value"
    t.datetime "date_time"
    t.bigint "patient_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["patient_id"], name: "index_mindful_minutes_on_patient_id"
  end

  create_table "o2_sats", force: :cascade do |t|
    t.integer "value"
    t.datetime "date_time"
    t.bigint "patient_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["patient_id"], name: "index_o2_sats_on_patient_id"
  end

  create_table "patients", force: :cascade do |t|
    t.string "name"
    t.date "dob"
    t.string "gender"
    t.string "telephone"
    t.string "address"
    t.string "hosp_num"
    t.string "nhs_num"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "resp_rates", force: :cascade do |t|
    t.integer "value"
    t.datetime "date_time"
    t.bigint "patient_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["patient_id"], name: "index_resp_rates_on_patient_id"
  end

  create_table "steps", force: :cascade do |t|
    t.integer "value"
    t.datetime "date_time"
    t.bigint "patient_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["patient_id"], name: "index_steps_on_patient_id"
  end

  create_table "temps", force: :cascade do |t|
    t.float "value"
    t.datetime "date_time"
    t.bigint "patient_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["patient_id"], name: "index_temps_on_patient_id"
  end

  create_table "time_standings", force: :cascade do |t|
    t.integer "value"
    t.datetime "date_time"
    t.bigint "patient_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["patient_id"], name: "index_time_standings_on_patient_id"
  end

  create_table "weights", force: :cascade do |t|
    t.float "value"
    t.datetime "date_time"
    t.bigint "patient_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["patient_id"], name: "index_weights_on_patient_id"
  end

  add_foreign_key "active_calories", "patients"
  add_foreign_key "blood_glucoses", "patients"
  add_foreign_key "blood_pressures", "patients"
  add_foreign_key "calorie_intakes", "patients"
  add_foreign_key "contacts", "clinicians"
  add_foreign_key "contacts", "patients"
  add_foreign_key "exercise_durations", "patients"
  add_foreign_key "falls", "patients"
  add_foreign_key "flights_climbed", "patients"
  add_foreign_key "heart_rates", "patients"
  add_foreign_key "heights", "patients"
  add_foreign_key "irreg_episodes", "patients"
  add_foreign_key "mindful_minutes", "patients"
  add_foreign_key "o2_sats", "patients"
  add_foreign_key "resp_rates", "patients"
  add_foreign_key "steps", "patients"
  add_foreign_key "temps", "patients"
  add_foreign_key "time_standings", "patients"
  add_foreign_key "weights", "patients"
end
