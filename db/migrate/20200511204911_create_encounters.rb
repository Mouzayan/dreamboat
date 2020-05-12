class CreateEncounters < ActiveRecord::Migration[6.0]
  def change
    create_table :encounters do |t|
      t.string :encounter_description
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
